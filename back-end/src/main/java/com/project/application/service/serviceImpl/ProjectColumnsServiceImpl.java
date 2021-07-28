package com.project.application.service.serviceImpl;

import com.project.application.entity.ProjectColumns;
import com.project.application.entity.Resources;
import com.project.application.repository.ProjectColumnsRepository;
import com.project.application.repository.ProjectRepository;
import com.project.application.service.ProjectColumnsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectColumnsServiceImpl implements ProjectColumnsService {
    @Autowired
    ProjectColumnsRepository repository;
    @Autowired
    ProjectRepository projectRepository;

    @Override
    public ProjectColumns addNewColumn(ProjectColumns projectColumn) {
        return repository.save(projectColumn);
    }

    @Override
    public void DeleteColumn(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public List<ProjectColumns> getAll(){
        return repository.findAll();//Sort.by(Sort.Direction.ASC, "column_id"));
    }



}
