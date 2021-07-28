package com.project.application.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "resources_detail")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
public class ResourcesDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "record_id")
    private Integer recordId;

    private Timestamp time_created;

    private Timestamp last_updated;


    @ManyToOne()
    @JoinColumn(name = "resources_id")
    @JsonIgnoreProperties(value = {"time_created","last_updated","resourcesDetails"})
    private Resources resource;



    @ManyToOne()
    @JoinColumn(name = "column_id")
    @JsonIgnoreProperties(value = {"project"})
    private ProjectColumns projectColumns;

    @Column(name = "column_value")
    private String column_value;

    public ResourcesDetails() {
    }

    public ResourcesDetails( String column_value) {
        this.column_value = column_value;
    }

    public ResourcesDetails(Resources resource, ProjectColumns projectColumn, String column_value) {
        this.resource = resource;
        this.projectColumns = projectColumn;
        this.column_value = column_value;
        this.last_updated = new Timestamp(System.currentTimeMillis());
        this.time_created = this.last_updated;
    }

    public Integer getRecordId() { return recordId;
    }

    public void setRecordId(Integer recordId) {
        this.recordId = recordId;
    }

    public Timestamp getTime_created() {
        return time_created;
    }

    public void setTime_created(Timestamp time_created) {
        this.time_created = time_created;
    }

    public Timestamp getLast_updated() {
        return last_updated;
    }

    public void setLast_updated(Timestamp last_updated) {
        this.last_updated = last_updated;
    }

    public Resources getResource() {
        return resource;
    }

    public void setResource(Resources resource) {
        this.resource = resource;
    }

    public String getColumn_value() {
        return column_value;
    }

    public void setColumn_value(String column_value) {
        this.column_value = column_value;
    }

    public ProjectColumns getProjectColumns() {
        return projectColumns;
    }

    public void setProjectColumns(ProjectColumns projectColumns) {
        this.projectColumns = projectColumns;
    }



    @Override
    public String toString() {
        return "ResourcesDetails{" +
                "recordId=" + recordId +
                ", time_created=" + time_created +
                ", last_updated=" + last_updated +
                ", resource=" + resource +
                ", projectColumns=" + projectColumns +
                ", column_value='" + column_value + '\'' +
                '}';
    }
}
