//package com.project.application.service.serviceImpl;
//
//import com.project.application.entity.Project;
//import com.project.application.entity.Resources;
//import com.project.application.repository.ProjectRepository;
//import com.project.application.service.ProjectService;
//import org.junit.Assert;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//
//import java.time.LocalDate;
//
//import static org.junit.jupiter.api.Assertions.*;
//
//class ProjectServiceImplTest {
//    @Autowired
//    ProjectService projectService;
//
//    @Test
//    void add() {
//        Project projects = new Project();
////        projects.setProjectName("project1");
////        projects.setOwner("New Owner");
////        projects.setTimeCreate(LocalDate.now());
////        Project test =  projectService.add(projects);
////        Assert.assertNotEquals(null, test);
//    }
//
//    @Test
//    void checkProject() {
//        Project project = new Project();
//        Assert.assertNotEquals(null, project);
//    }
//
//    @Test
//    void get() {
//        Project result = projectService.getProjectById(1);
//        System.out.println(result);
//        Assert.assertNotEquals(null, result);
//    }
//
//
//    @Test
//    void updateUser() {
//        Project result = projectService.updateProject(1);
////        result.setProjectName("Changed Name");
//        Assert.assertNotEquals(null, result);
//    }
//
//    @Test
//    void deleteById() {
//        projectService.deleteById(1);
//    }
//
//
//}