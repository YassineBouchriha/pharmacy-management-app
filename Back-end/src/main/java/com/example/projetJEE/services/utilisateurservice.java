package com.example.projetJEE.services;

import com.example.projetJEE.entitys.user;
import com.example.projetJEE.repository.utilisateurrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class utilisateurservice {
    @Autowired
    private utilisateurrepo utilisateurrepo;
    public List<user> getAllusers() {
        return utilisateurrepo.findAll();
    }


}
