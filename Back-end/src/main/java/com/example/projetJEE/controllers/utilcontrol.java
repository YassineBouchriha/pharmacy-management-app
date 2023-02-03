package com.example.projetJEE.controllers;

import com.example.projetJEE.entitys.user;
import com.example.projetJEE.services.utilisateurservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController

@RequestMapping("/user")
@CrossOrigin("http://localhost:4200")
public class utilcontrol {
    @Autowired

    private utilisateurservice utilisateurservice;

    @GetMapping("/all")
    public List<user> getAllusers() {
        return utilisateurservice.getAllusers();
    }


}
