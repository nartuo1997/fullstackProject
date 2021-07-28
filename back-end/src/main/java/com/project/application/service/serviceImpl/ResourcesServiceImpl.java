package com.project.application.service.serviceImpl;

import com.project.application.entity.Project;
import com.project.application.entity.Resources;
import com.project.application.repository.ResourcesRepository;
import com.project.application.service.ResourcesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ResourcesServiceImpl implements ResourcesService {
    @Autowired
    private ResourcesRepository repository;


    @Override
    public Resources getResourceById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Resources createResource(Resources resource) {
        return repository.save(resource);
    }

    @Override
    public List<Resources> getAllResource() {
        return repository.findAll();
    }

    @Override
    public void deleteResourceById(Integer id) {
        repository.deleteById(id);
    }
}