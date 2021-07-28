package com.project.application.service;

import com.project.application.entity.ResourcesDetails;

import java.util.List;

public interface ResourcesDetailsService {
    public ResourcesDetails createDetails(ResourcesDetails details);

    //public ResourcesDetails UpdateDetails(ResourcesDetails details);

    public List<ResourcesDetails> getAllDetails();

//    public List<ResourcesDetails> getDetailsByResourceId(Integer resourceId);
}
