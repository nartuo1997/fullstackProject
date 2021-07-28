package com.project.application.controller;

import com.project.application.entity.ProjectColumns;
import com.project.application.entity.Resources;
import com.project.application.entity.ResourcesDetails;
import com.project.application.repository.ProjectColumnsRepository;
import com.project.application.repository.ResourcesDetailsRepository;
import com.project.application.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;

import java.sql.Timestamp;
import java.util.*;

@CrossOrigin(origins ="*")
@RestController
@RequestMapping("/resource")
public class ResourceController {

    @Autowired
    ResourcesService resourceService;

    @Autowired
    UserService userService;

    @Autowired
    ProjectService projectService;

    @Autowired
    ProjectColumnsRepository projectColumnRepository;

    @Autowired
    ProjectResourcesService projectResourceService;

    @Autowired
    ResourcesDetailsRepository resourcesDetailsRepository;

    @Autowired
    ResourcesDetailsService detailService;



    @PostMapping("/create")
    public ResponseEntity<?> addNewResource(@RequestBody Resources resources){
//        Resources resource = new Resources();

       // resource.setLast_updated(new Timestamp(System.currentTimeMillis()));
//        resources.setTime_created(new Timestamp(System.currentTimeMillis()));
        resourceService.createResource(resources);
        return new ResponseEntity<>(resources, HttpStatus.CREATED);
    }

    @GetMapping("getAll")
    public ResponseEntity<List<Resources>> getAllResource(){
        List<Resources> list = resourceService.getAllResource();
        return ResponseEntity.ok(list);
    }

    @GetMapping("getById/{id}")
    public Resources getResourcesById(@PathVariable(value = "id") Integer id){
        System.out.println(resourceService.getResourceById(id));
        return resourceService.getResourceById(id);
    }

    @DeleteMapping("/deleteResourceById/{id}")
    public void deleteResourceById(@PathVariable(value = "id") int id){
        resourceService.deleteResourceById(id);
    }

    @PostMapping("createResourceDetailById")
    public ResourcesDetails createResourceDetailByResourceId(@RequestBody ResourcesDetails details){
        details.setTime_created(new Timestamp(System.currentTimeMillis()));
        details.setLast_updated(new Timestamp(System.currentTimeMillis()));
        System.out.println(details);
        return detailService.createDetails(details);

    }

    @PostMapping("updateResourceDetailById")
    @Transactional
    public ResourcesDetails updateResourceDetailByResourceId(@RequestBody ResourcesDetails details){
        details.setTime_created(resourcesDetailsRepository.getOne(details.getRecordId()).getTime_created());
        details.setLast_updated(new Timestamp(System.currentTimeMillis()));
        System.out.println(details);
        return resourcesDetailsRepository.save(details);
    }

    @GetMapping ("/findAll")
    public ResponseEntity<List<Resources>> findAllResources(){
        List<Resources> list = resourceService.getAllResource();
        for(Resources resource : list){
            System.out.println(resource.toString());
        }
        return ResponseEntity.ok(list);
    }

    @GetMapping("searchByName")
    public ResponseEntity<List<ResourcesDetails>> findByname(@RequestParam(value = "name") String name){
        List<ResourcesDetails> res = new ArrayList();
        List<ResourcesDetails> list = detailService.getAllDetails();
        for(ResourcesDetails r : list){
            if(r.getColumn_value().replace(" ","").toLowerCase().contains(name.toLowerCase())){
                res.add(r);
            }
        }
        return ResponseEntity.ok(res);
    }

    @PostMapping("addResourceDetails")
    public ResponseEntity<Void> AddResourceDetails (@RequestParam ArrayList<String> row) throws Exception{
        List<ProjectColumns> columns = projectColumnRepository.findAll(Sort.by(Sort.Direction.ASC, "column_id"));
        int index = 0;
        for (ProjectColumns c: columns)
        {
            Resources r = resourceService.createResource(new Resources());
            ResourcesDetails details = new ResourcesDetails(r, c, row.get(index));
            detailService.createDetails(details);
            index++;
        }
        return ResponseEntity.ok(null);
    }
}
