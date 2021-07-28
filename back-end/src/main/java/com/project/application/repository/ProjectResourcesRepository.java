package com.project.application.repository;

import com.project.application.entity.Project;
import com.project.application.entity.ProjectResources;
import com.project.application.entity.Resources;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProjectResourcesRepository extends JpaRepository<ProjectResources, Integer> {

//    void deleteByProjectIdAndRecordId(Integer projectId, Integer resourceId);

//    public List<ProjectResources> findByProjectAndResource(Project project, Resources resource);
//    public List<ProjectResources> findProjectResourcesByProject(Project project, Resources resource);




    public List<ProjectResources> findByProject(Project project);

//    <Project>


}
