package com.example.projetJEE.entitys;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

@Entity
@Data
public class produit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_produit;
    private String lib_produit;
    private String description_produit;
    private double prix_produit;
    private Date date_ajoute;
    private float prix_liv;

    @ManyToMany(mappedBy = "produits")
    @JsonIgnore
    private Collection<user> users = new ArrayList<>();

    @ManyToMany(mappedBy = "produits")
    @JsonIgnore
    private Collection<facture> factures = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "id_laboratoire")
    private laboratoire laboratoire;

    @ManyToOne
    @JoinColumn(name = "id_famille")
    private famille famille;
}
