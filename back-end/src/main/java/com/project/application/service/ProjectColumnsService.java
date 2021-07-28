package com.project.application.service;

import com.project.application.entity.ProjectColumns;
import com.project.application.repository.ProjectColumnsRepository;

import java.util.List;

public interface ProjectColumnsService {
    public ProjectColumns addNewColumn(ProjectColumns projectColumn);

    public void DeleteColumn(Integer id);

    public List<ProjectColumns> getAll();
}
