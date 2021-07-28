package com.project.application.service;

import com.project.application.entity.User;

import java.util.List;

public interface UserService {
    public User findOneById(Integer id);

    public User findByUserName(String username);

    public User getUserById(Integer id);

    public User updateUser(User user);

    public void deleteById(Integer id);

    public User saveUser(User user);

    public List<User> findAll();
}
