package com.example.projetJEE.controllers;


import com.example.projetJEE.entitys.fournisseur;
import com.example.projetJEE.services.fournisseurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/fournisseur")

public class fournisseurController {
    @Autowired
    private fournisseurService fournisseurService;
    @GetMapping("/all")
    public List<fournisseur> getAllfournisseurs() {
        return fournisseurService.getAllFournisseurs();
    }
    @GetMapping("/getfour/{id}")
    public fournisseur getfournisseurById(@PathVariable Long id) {
        return fournisseurService.getFournisseurById(id);
    }
    @PostMapping("/addfour")
    public fournisseur addfournisseur(@RequestBody fournisseur fournisseur) {
        return fournisseurService.addFournisseur(fournisseur);
    }
    @PutMapping("/updatefour")
    public fournisseur updatefournisseur(@RequestBody fournisseur fournisseur) {
        return fournisseurService.updateFournisseur(fournisseur);
    }
    @DeleteMapping("/deletefour/{id}")
    public void deletefournisseurById(@PathVariable Long id) {
        fournisseurService.deleteFournisseurById(id);
    }
    @DeleteMapping("/deleteallfour")
    public String deleteallfournisseurs() {
        return fournisseurService.deleteAllFournisseurs();
    }


}
