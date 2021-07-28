package com.project.application.entity;

public enum Role {
    User("User"),
    Manager("Manager"),
    Admin("Admin");

    private String role;


    Role(String role) {
        this.role = role;

    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

}
