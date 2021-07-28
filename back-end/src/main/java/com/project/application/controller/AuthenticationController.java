package com.project.application.controller;
;
import com.project.application.entity.User;
import com.project.application.security.JwtUtil;
import com.project.application.service.MyUserDetailsService;
import com.project.application.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


@CrossOrigin(origins ="*")
@RestController()
@RequestMapping("/user")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService service;

    @Autowired
    private JwtUtil jwtTokenUtil;

    @Autowired
    private MyUserDetailsService userDetailsService;

    @Autowired
    private PasswordEncoder encoder;

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody User cur_user) throws Exception {

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(cur_user.getUserName(), cur_user.getPassword())
            );
        }
        catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }

        final UserDetails userDetails = userDetailsService
                .loadUserByUsername(cur_user.getUserName());

        final String jwt = jwtTokenUtil.generateToken(userDetails);

        User user = service.findByUserName(cur_user.getUserName());
        String id = String.valueOf(user.getId());


        Map<String,String> res = new HashMap<>();
        res.put("token", jwt);
        res.put("userId", id);
        res.put("email", user.getEmail());
        res.put("userName", user.getUserName());
        return new ResponseEntity<>(res, HttpStatus.ACCEPTED);
    }

    @GetMapping("/firstpage")
    public void firstpage(@RequestParam (value = "s") String s) {
        System.out.println(s + " successfully login");

    }

}

