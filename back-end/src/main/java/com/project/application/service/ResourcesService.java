package com.project.application.service;

import com.project.application.entity.Project;
import com.project.application.entity.Resources;

import java.util.List;

public interface ResourcesService {
    public Resources getResourceById(Integer id);

    public Resources createResource(Resources resource);

    public List<Resources> getAllResource();

    public void deleteResourceById(Integer id);
}
