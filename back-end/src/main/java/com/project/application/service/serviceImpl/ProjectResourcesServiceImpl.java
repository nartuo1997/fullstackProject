package com.project.application.service.serviceImpl;

import com.project.application.entity.Project;
import com.project.application.entity.ProjectResources;
import com.project.application.entity.Resources;
import com.project.application.repository.ProjectRepository;
import com.project.application.repository.ProjectResourcesRepository;
import com.project.application.repository.ResourcesRepository;
import com.project.application.service.ProjectResourcesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectResourcesServiceImpl implements ProjectResourcesService {
    @Autowired
    ProjectResourcesRepository repository;


    @Override
    public ProjectResources addProjectResource(ProjectResources pr) {
        return repository.save(pr);
    }

    @Override
    public void deleteResourceById(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public List<ProjectResources> getAllProjectResource() {
        return repository.findAll();
    }




//    @Override
//    public void deleteResourceFromProject(Project project , Resources resources) {
////        projectResourcesRepository.delete
//     projectResourcesRepository.deleteByProjectIdAndRecordId(project.getProjectId(), resources.getResourceId());
//
//
//    }
//
//    @Override
//    public List<ProjectResources> findByProject(Project project) {
//        return projectResourcesRepository.findByProject(project);
//    }


}


