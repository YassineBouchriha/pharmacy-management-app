package com.example.projetJEE.entitys;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Data
public class fournisseur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_fournisseur;
    private String nom_fournisseur;
    private String adresse_fournisseur;
    private String email_fournisseur;
    private String tel_fournisseur;

    @OneToMany(mappedBy = "fournisseur", cascade = CascadeType.REMOVE)
    @JsonIgnore
    private Collection<facture> factures = new ArrayList<>();
}
