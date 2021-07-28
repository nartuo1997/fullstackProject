package com.project.application.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;


import javax.persistence.*;
import java.math.BigInteger;
import java.sql.Timestamp;
import java.util.Set;
@Entity
@Table(name = "project")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer project_id;


    @ManyToOne()
    @JoinColumn(name = "id")
    private User user;


    private Timestamp time_created;

    private BigInteger projectCode;

    private String projectName;

    @OneToMany (mappedBy="project", fetch = FetchType.EAGER)
    @JsonIgnore
    private Set<ProjectResources> projectResources;



    public Project() {
    }

    public Project(BigInteger projectCode, String projectName) {
        this.projectCode = projectCode;
        this.projectName = projectName;
    }


    public Integer getProject_id() {
        return project_id;
    }

    public void setProject_id(Integer project_id) {
        this.project_id = project_id;
    }

    public Set<ProjectResources> getProjectResources() {
        return projectResources;
    }

    public void setProjectResources(Set<ProjectResources> projectResources) {
        this.projectResources = projectResources;
    }

    public Timestamp getTime_created() {
        return time_created;
    }

    public void setTime_created(Timestamp time_created) {
        this.time_created = time_created;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public BigInteger getProjectCode() {
        return projectCode;
    }

    public void setProjectCode(BigInteger projectCode) {
        this.projectCode = projectCode;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    @Override
    public String toString() {
        return "Project{" +
                "project_id=" + project_id +
                ", user=" + //user +
                ", time_created=" + time_created +
                ", projectCode=" + projectCode +
                ", projectName='" + projectName + '\'' +
                ", projectResources=" + projectResources +
                '}';
    }
}
