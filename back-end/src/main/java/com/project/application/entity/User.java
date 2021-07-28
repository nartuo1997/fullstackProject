package com.project.application.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;


    @Column(name = "user_name")
    private String userName;


//    @Enumerated(value = EnumType.STRING)
    private String role;


    @CreatedDate
    @Column(name = "time_created")
    private Date timeCreated;


    @LastModifiedDate
    @Column(name = "last_updated")
    private Date lastUpdated;


    private String password;



    private String email;

    @OneToMany(mappedBy = "user",
            fetch=FetchType.EAGER)
    @JsonIgnore
    private List<Project> project;


    public List<Project> getProject() {
        return project;
    }

    public void setProject(List<Project> project) {
        this.project = project;
    }

    public User() {}

    public User(String user_name, String role, String password) {
        this.userName = user_name;
        this.role = role;
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserName() {
        return userName;
    }


    public String getRole() {
        return role;
    }


    public String getPassword() {
        return password;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Integer getId() {
        return id;
    }

    public Date getTime_created() {
        return timeCreated;
    }

    public Date getLast_updated() {
        return lastUpdated;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    public void setPassword(String password) {
        this.password = password;
    }


    public void setTime_created(Date time_created) {
        this.timeCreated = time_created;
    }

    public void setLast_updated(Date last_updated) {
        this.lastUpdated = last_updated;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", user_name='" + userName + '\'' +
                ", role='" + role + '\'' +
                ", time_created=" + timeCreated +
                ", last_updated=" + lastUpdated +
                ", password='" + password + '\'' +
                '}';
    }
}