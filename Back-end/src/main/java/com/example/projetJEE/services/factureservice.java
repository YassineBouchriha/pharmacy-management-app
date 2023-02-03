package com.example.projetJEE.services;

import com.example.projetJEE.entitys.facture;
import com.example.projetJEE.repository.facturerepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class factureservice {
    @Autowired
    private facturerepo facturerepo;

    public List<facture> getAllfactures() {
        return facturerepo.findAll();
    }
    public facture getfactureById(Long id) {
        return facturerepo.findById(id).get();
    }

    public String deletefactureById(Long id) {
        facturerepo.deleteById(id);
        return "facture deleted"+id;
    }
    public facture addfacture(facture facture) {
        return facturerepo.save(facture);
    }
    public facture updatefacture(facture facture) {
        facture existingfacture = facturerepo.findById(facture.getId_facture()).orElse(null);
        existingfacture.setTotale_TVA(facture.getTotale_TVA());
        existingfacture.setTotale_HT(facture.getTotale_HT());
        existingfacture.setTotale_TTC(facture.getTotale_TTC());
        existingfacture.setFournisseur(facture.getFournisseur());
        existingfacture.setDate_facture(facture.getDate_facture());
        return facturerepo.save(existingfacture);

    }
    public String deleteallfactures() {
        facturerepo.deleteAll();
        return "All factures deleted";
    }
}
