package com.project.application.controller;


import com.project.application.entity.Project;
import com.project.application.entity.ProjectColumns;
import com.project.application.repository.ProjectColumnsRepository;
import com.project.application.service.ProjectColumnsService;
import com.project.application.service.ProjectService;
import com.project.application.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins ="*")
@RestController
@RequestMapping("/projects")
public class ProjectController {

    @Autowired
    private ProjectService service;

    @Autowired
    private ProjectColumnsService columnService;

    @Autowired
    private ProjectColumnsRepository projectColumnRepository;

    @Autowired
    private UserService userService;

    @GetMapping("/getProjectById")
    public Project findById(@RequestParam(value="id") Integer id){
        Project res = service.getProjectById(id);
        //System.out.println(res);
        return res;
    }

    @GetMapping("/findByCode")
    public Project findByCode(@RequestParam(value = "code") BigInteger code){
        Project res = service.getProjectByCode(code);
        System.out.println(res);
        return res;
    }


    @PostMapping("/createByUserId")
    public Project createProject(@RequestBody Project project){
        return service.createProject(project);
    }


    @DeleteMapping("/deleteProjectById/{id}")
    public void deleteProjectById(@PathVariable(value = "id") int id){
        service.deleteProjectById(id);
    }


    @GetMapping ("/findAll")
    @Transactional
    public ResponseEntity<List<Project>> findAllProjects(){
        List<Project> list = service.findAll();
        for(Project project : list){
            System.out.println(project.toString());
        }
        return ResponseEntity.ok(list);
    }

    @PostMapping("/Column/create")
    public ProjectColumns createColumn(@RequestBody ProjectColumns projectColumn) throws Exception {
        return columnService.addNewColumn(projectColumn);
    }

    @PostMapping("/Column/delete")
    public void deleteColumnById(@RequestParam Integer id) {
        columnService.DeleteColumn(id);
    }

    @GetMapping ("/findAllColumns")
    @Transactional
    public ResponseEntity<List<String>> findAllProjectsColumns(){
        List<String> res = new ArrayList<>();
        List<ProjectColumns> list = columnService.getAll();
        for(ProjectColumns p : list){
            res.add(p.getColumn_name());
        }
        return ResponseEntity.ok(res);
    }
}
