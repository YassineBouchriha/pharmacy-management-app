package com.example.projetJEE.services;

import com.example.projetJEE.entitys.fournisseur;
import com.example.projetJEE.repository.fournisseurrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class fournisseurService {
    @Autowired
    private fournisseurrepo fournisseurrepo;
    public fournisseur addFournisseur(fournisseur fournisseur) {
        fournisseurrepo.save(fournisseur);
        return fournisseur;
    }


    public fournisseur updateFournisseur(fournisseur fournisseur) {
        fournisseur existingfournisseur = fournisseurrepo.findById(fournisseur.getId_fournisseur()).orElse(null);
        existingfournisseur.setNom_fournisseur(fournisseur.getNom_fournisseur());
        existingfournisseur.setAdresse_fournisseur(fournisseur.getAdresse_fournisseur());
        existingfournisseur.setTel_fournisseur(fournisseur.getTel_fournisseur());
        existingfournisseur.setEmail_fournisseur(fournisseur.getEmail_fournisseur());
         fournisseurrepo.save(existingfournisseur);
         return existingfournisseur;
    }
    public fournisseur getFournisseurById(Long id) {
        return fournisseurrepo.findById(id).get();
    }
    public List<fournisseur> getAllFournisseurs() {
        return fournisseurrepo.findAll();
    }
    public String deleteAllFournisseurs() {
        fournisseurrepo.deleteAll();
        return "All fournisseurs deleted";
    }
    public String deleteFournisseurById(Long id) {
        fournisseurrepo.deleteById(id);
        return "fournisseur deleted"+id;
    }
}
