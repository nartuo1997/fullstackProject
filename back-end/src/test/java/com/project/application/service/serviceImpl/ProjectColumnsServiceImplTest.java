package com.project.application.service.serviceImpl;

import com.project.application.entity.Project;
import com.project.application.entity.ProjectColumns;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;

class ProjectColumnsServiceImplTest {
    @Autowired
    ProjectColumnsServiceImpl projectColumnsService;

    @Test
    void add() {
        ProjectColumns projectsColumns = new ProjectColumns();
//        projectsColumns.setColumnName("Column1");
//        projectsColumns.setFormulaText("Formula");
        ProjectColumns test =  projectColumnsService.addNewColumn(projectsColumns);
        Assert.assertNotEquals(null, test);
    }

    @Test
    void updateUser() {

    }




}