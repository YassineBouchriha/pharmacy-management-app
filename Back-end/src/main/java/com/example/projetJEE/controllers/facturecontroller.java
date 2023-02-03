package com.example.projetJEE.controllers;

import com.example.projetJEE.entitys.facture;
import com.example.projetJEE.services.factureservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/facture")
public class facturecontroller {

    @Autowired
    private factureservice factureservice;

    @GetMapping("/all")
    public List<facture> getAllfactures() {
        return factureservice.getAllfactures();
    }
    @GetMapping("/getfact/{id}")
    public facture getfactureById(@PathVariable Long id) {
        return factureservice.getfactureById(id);
    }
    @CrossOrigin("*")
    @DeleteMapping("/deletefact/{id}")
    public void deletefactureById(@PathVariable Long id) {
        factureservice.deletefactureById(id);
    }

    @PostMapping("/addfact")
    public facture addfacture(@RequestBody facture facture) {
        return factureservice.addfacture(facture);
    }
    @CrossOrigin("*")
    @DeleteMapping("/deleteallfact")
    public String deleteallfactures() {
        return factureservice.deleteallfactures();
    }
    @PutMapping("/updatefact")
    public facture updatefacture(@RequestBody facture facture) {
        return factureservice.updatefacture(facture);
    }
}
