package com.project.application.controller;


import com.project.application.entity.User;
import com.project.application.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;


@CrossOrigin(origins ="*")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/register")
    public ResponseEntity<?> createUser(@RequestBody User user){


        return new ResponseEntity<>(service.saveUser(user), HttpStatus.CREATED);
    }

    @GetMapping ("/findAll")
    public ResponseEntity<?> findAllUsers(){
        List<User> list = service.findAll();
//        for(User user : list){
//            System.out.println(user.toString());
//        }
        return new ResponseEntity<>(list, HttpStatus.ACCEPTED);
    }

    @GetMapping("/getUserById/{id}")
    public ResponseEntity<?> getUserById(@PathVariable(value = "id") int id) {
        User user = service.findOneById(id);
        return new ResponseEntity<>(user, HttpStatus.ACCEPTED);
    }


    @DeleteMapping("/admin/delete/{id}")
    public void deleteUserById(@PathVariable(value = "id") int id){
        service.deleteById(id);

    }

    @PostMapping("/updateUserNameById")
    @Transactional
    public void updateUserNameById(@RequestParam(value = "id") Integer id,
                                   @RequestParam(value = "name") String name){
        User user = service.getUserById(id);
        user.setUserName(name);
        service.updateUser(user);
    }

    @PostMapping("/updateUserPasswordById")
    @Transactional
    public void updateUserPasswordById(@RequestParam(value = "id") Integer id,
                                       @RequestParam(value = "password") String password){
        User user = service.getUserById(id);
        user.setPassword(password);
        service.updateUser(user);
    }
}
