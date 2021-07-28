package com.project.application.service.serviceImpl;

import com.project.application.entity.User;
import com.project.application.repository.UserRepository;
import com.project.application.service.UserService;
import net.bytebuddy.implementation.bind.annotation.Super;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository repository;

    @Autowired
    private PasswordEncoder encoder;

    @Override
    public User findOneById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public User findByUserName(String user_name){
        return repository.findByUserName(user_name);
    }

    /*
    @Override
    public Integer login(String username, String password) {
        return null;
    }
     */

    @Override
    public User getUserById(Integer id) {
        return repository.getById(id);
    }

    @Override
    public User updateUser(User user) {
        return repository.save(user);
    }

    @Override
    public void deleteById(Integer id){
        repository.deleteById(id);
    }

    @Override
    public User saveUser(User user) {
        user.setPassword( encoder.encode(user.getPassword()));
        user.setPassword(user.getPassword());
        System.out.println("User" + user);
        return repository.save(user);
    }

    @Override
    public List<User> findAll() {
        return repository.findAll();
    }




}
