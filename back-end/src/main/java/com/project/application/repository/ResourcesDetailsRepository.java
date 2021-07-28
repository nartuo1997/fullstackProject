package com.project.application.repository;

import com.project.application.entity.ResourcesDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ResourcesDetailsRepository extends JpaRepository<ResourcesDetails, Integer> {
//    List<ResourcesDetails> getResourceDetailsByResourceId(Integer resourceId);
}
