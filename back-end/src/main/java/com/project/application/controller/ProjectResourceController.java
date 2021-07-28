package com.project.application.controller;

import com.project.application.entity.ProjectResources;
import com.project.application.service.ProjectResourcesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;

@CrossOrigin(origins ="*")
@RestController
@RequestMapping("/projectResource")
public class ProjectResourceController {
    @Autowired
    ProjectResourcesService service;

    @PostMapping("/create")
    public ProjectResources addProjectResource(@RequestBody ProjectResources pr){
        pr.setTime_created(new Timestamp(System.currentTimeMillis()));
        return service.addProjectResource(pr);
    }

    @PostMapping("/delete")
    public void deleteProjectResourceById(@RequestParam Integer id){
        service.deleteResourceById(id);
    }
}
