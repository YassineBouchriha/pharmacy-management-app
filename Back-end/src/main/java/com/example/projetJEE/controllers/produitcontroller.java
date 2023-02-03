package com.example.projetJEE.controllers;

import com.example.projetJEE.entitys.produit;
import com.example.projetJEE.services.produitservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/produit")
@CrossOrigin("http://localhost:4200")
public class produitcontroller {
    @Autowired

    private produitservice produitservice;

    @GetMapping("/all")
    public List<produit> getAllproduits() {
        return produitservice.allproduit();
    }
    @GetMapping("/getprod/{id}")
    public produit getproduitById(@PathVariable Long id) {
        return produitservice.getproduitById(id);
    }
    @CrossOrigin("http://localhost:4200")

    @DeleteMapping("/deleteprod/{id}")
    public String deleteproduitById(@PathVariable Long id) {
        return produitservice.deleteproduitById(id);
    }

    @PostMapping("/addprod")
    public produit addproduit(@RequestBody produit produit) {
        return produitservice.addproduit(produit);
    }
    @DeleteMapping("/deleteallprod")
    public String deleteallproduits() {
        return produitservice.deleteallproduits();
    }
    @PutMapping("/updateprod")
    public produit updateproduit(@RequestBody produit produit) {
        return produitservice.updateproduit(produit);
    }
    @PatchMapping("/updatelabprod/{id}/{idlab}")
    public String updatelabproduit(@PathVariable("id") Long id,@PathVariable("idlab") Long idlab) {
        System.out.println("id produit "+id);
        System.out.println("id lab "+idlab);
        produitservice.updatelabprod(id,idlab);
        return "ok";
    }
}
