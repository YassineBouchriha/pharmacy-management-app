package com.example.projetJEE.services;
import com.example.projetJEE.entitys.famille;
import com.example.projetJEE.repository.famillerepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class familleservice {
    @Autowired
    private famillerepo famillerepo;
    public List<famille> getAllfamilles() {
        return famillerepo.findAll();
    }
    public famille getfamilleById(Long id) {
        return famillerepo.findById(id).get();
    }
    public String deletefamilleById(Long id) {
        famillerepo.deleteById(id);
        return "famille deleted"+id;
    }
    public famille addfamille(famille famille) {
        return famillerepo.save(famille);
    }
    public famille updatefamille(famille famille) {
        famille existingfamille = famillerepo.findById(famille.getId_famille()).orElse(null);
        existingfamille.setLib_famille(famille.getLib_famille());
        return famillerepo.save(existingfamille);
    }
    public String deleteallfamilles() {
        famillerepo.deleteAll();
        return "All familles deleted";
    }
    public String deletefamById(Long id) {
        famillerepo.deleteById(id);
        return "facture deleted"+id;
    }
}
