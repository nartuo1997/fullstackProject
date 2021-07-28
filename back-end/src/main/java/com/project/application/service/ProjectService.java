package com.project.application.service;

import com.project.application.entity.Project;
import com.project.application.entity.User;

import java.math.BigInteger;
import java.util.List;

public interface ProjectService {
    public Project getProjectById(Integer id);

    public Project getProjectByCode(BigInteger code);

    public Project updateProject(Project project);

    public void deleteProjectById(Integer id);

    public Project createProject(Project project);

    public List<Project> findAll();

    public List<Project> getProjectsByUserId(Integer id);
}