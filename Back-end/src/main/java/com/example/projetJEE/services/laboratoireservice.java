package com.example.projetJEE.services;

import com.example.projetJEE.entitys.laboratoire;
import com.example.projetJEE.repository.laboratoirerepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class laboratoireservice {
    @Autowired
    private laboratoirerepo laboratoirerepo;

    public laboratoire addLaboratoire(laboratoire laboratoire) {

        laboratoirerepo.save(laboratoire);
        return laboratoire;
    }
    public laboratoire getLaboratoireById(Long id) {
        return laboratoirerepo.findById(id).get();
    }
    public List<laboratoire> getAllLaboratoires() {
        return laboratoirerepo.findAll();
    }
    public void deleteLaboratoireById(Long id) {
        laboratoirerepo.deleteById(id);
    }
    public String deleteAllLaboratoires() {
        laboratoirerepo.deleteAll();
        return "All laboratoires deleted";
    }
    public laboratoire updatelaboratoire(laboratoire laboratoire) {
        laboratoire existinglaboratoire = laboratoirerepo.findById(laboratoire.getId_laboratoire()).orElse(null);
        existinglaboratoire.setLib_laboratoire(laboratoire.getLib_laboratoire());
        return laboratoirerepo.save(existinglaboratoire);
    }


}
