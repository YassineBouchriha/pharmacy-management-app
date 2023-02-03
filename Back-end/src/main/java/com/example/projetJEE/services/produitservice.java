package com.example.projetJEE.services;

import com.example.projetJEE.entitys.produit;
import com.example.projetJEE.repository.produitrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class produitservice {
    @Autowired
    private produitrepo produitrepo;

    public produit addproduit(produit produit) {
        produitrepo.save(produit);
        return produit;
    }

    public produit getproduitById(Long id) {
        return produitrepo.findById(id).get();

    }
    public List<produit> allproduit() {
        return produitrepo.findAll();
    }

    public String deleteproduitById(Long id) {
        produitrepo.deleteById(id);
        return "produit deleted"+id;
    }
    public String deleteallproduits() {
        produitrepo.deleteAll();
        return "All produits deleted";
    }
    public produit updateproduit(produit produit) {
        produit existingproduit = produitrepo.findById(produit.getId_produit()).orElse(null);
        existingproduit.setLib_produit(produit.getLib_produit());
        existingproduit.setPrix_produit(produit.getPrix_produit());
        existingproduit.setFamille(produit.getFamille());
        existingproduit.setLaboratoire(produit.getLaboratoire());
        return produitrepo.save(existingproduit);
    }
    public void updatelabprod(Long id, Long idlab) {
        produitrepo.updatelabprod(id, idlab);
    }
}
