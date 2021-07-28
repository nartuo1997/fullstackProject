package com.project.application.service.serviceImpl;

import com.project.application.entity.ResourcesDetails;
import com.project.application.repository.ResourcesDetailsRepository;
import com.project.application.service.ResourcesDetailsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResourcesDetailsServiceImpl implements ResourcesDetailsService {
    @Autowired
    ResourcesDetailsRepository repository;

    @Override
    public ResourcesDetails createDetails(ResourcesDetails details) {
        return repository.save(details);
    }

    @Override
    public List<ResourcesDetails> getAllDetails() {
        return repository.findAll();
    }

//    @Override
//    public List<ResourcesDetails> getDetailsByResourceId(Integer resourceId) {
//        return repository.getResourceDetailsByResourceId(resourceId);
//    }
}
