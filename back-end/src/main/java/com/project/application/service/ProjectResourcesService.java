package com.project.application.service;

import com.project.application.entity.Project;
import com.project.application.entity.ProjectResources;
import com.project.application.entity.Resources;
import org.springframework.data.annotation.CreatedDate;

import java.util.List;

public interface ProjectResourcesService {

    public ProjectResources addProjectResource(ProjectResources pr);

    public void deleteResourceById(Integer id);

    public List<ProjectResources> getAllProjectResource();;

//
//
//
//    void deleteResourceFromProject (Project project, Resources resources);
//
//    public List< ProjectResources> findByProject(Project project);




}
