package com.example.projetJEE.controllers;

import com.example.projetJEE.services.familleservice;
import com.example.projetJEE.entitys.famille;
import com.example.projetJEE.repository.famillerepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/famille")
@CrossOrigin("http://localhost:4200")
public class famillecontroller {
    @Autowired
    private familleservice famillerepo;
    @GetMapping("/all")
    public List<famille> getAllfamilles() {
        return famillerepo.getAllfamilles();
    }
    @GetMapping("/getfam/{id}")
    public famille getfamilleById(@PathVariable Long id) {
        return famillerepo.getfamilleById(id);

    }
    @DeleteMapping("/deletefam/{id}")
    public String deletefamilleById(@PathVariable Long id) {
        return famillerepo.deletefamilleById(id);
    }
    @PostMapping("/addfam")
    public famille addfamille(@RequestBody famille famille) {
        return famillerepo.addfamille(famille);
    }
    @DeleteMapping("/deleteallfam")
    public String deleteallfamilles() {
        return famillerepo.deleteallfamilles();
    }
    @PutMapping("/updatefam")
    public famille updatefamille(@RequestBody famille famille) {
        return famillerepo.updatefamille(famille);
    }

}
