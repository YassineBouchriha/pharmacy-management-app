package com.example.projetJEE.controllers;

import com.example.projetJEE.entitys.laboratoire;
import com.example.projetJEE.repository.laboratoirerepo;
import com.example.projetJEE.services.laboratoireservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/laboratoire")
@CrossOrigin("http://localhost:4200")
public class laboratoirecontroller {
    @Autowired
    private laboratoireservice labor;
    @GetMapping("/all")
    public List<laboratoire> getAlllaboratoires() {
        return labor.getAllLaboratoires();
    }
    @GetMapping("/getlab/{id}")
    public laboratoire getlaboratoireById(@PathVariable Long id) {
        return labor.getLaboratoireById(id);
    }
    @DeleteMapping("/deletelab/{id}")
    public void deletelaboratoireById(@PathVariable Long id) {
        labor.deleteLaboratoireById(id);
    }
    @DeleteMapping("/deletealllab")
    public String deletealllaboratoires() {
        return labor.deleteAllLaboratoires();
    }
    @PostMapping("/addlab")
    public laboratoire addlaboratoire(@RequestBody laboratoire laboratoire) {
        return labor.addLaboratoire(laboratoire);
    }
    @PutMapping("/updatelab")
    public laboratoire updatelaboratoire(@RequestBody laboratoire laboratoire) {
        return labor.updatelaboratoire(laboratoire);
    }


}
