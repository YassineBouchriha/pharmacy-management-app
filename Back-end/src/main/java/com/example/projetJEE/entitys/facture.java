package com.example.projetJEE.entitys;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

@Entity
@Data
public class facture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_facture;
    private Date date_facture;
    private double totale_TVA;
    private double totale_HT;
    private double totale_TTC;

    @ManyToOne
    @JoinColumn(name = "id_fournisseur" , referencedColumnName = "id_fournisseur")
    private fournisseur fournisseur;

    @ManyToMany
    @JoinTable(
            name = "facture_produit",
            joinColumns = @JoinColumn(name = "facture_id"),
            inverseJoinColumns = @JoinColumn(name = "produit_id")
    )
    private Collection<produit> produits = new ArrayList<>();

}
