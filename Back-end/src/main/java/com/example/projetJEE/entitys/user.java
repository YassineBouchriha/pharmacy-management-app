package com.example.projetJEE.entitys;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

@Entity
@Data
public class user {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_user;
    private String nom_user;
    private String prenom_user;
    private String adresse_user;
    private String email_user;
    private String pwd_user;
    private String zip_user;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private Date date_naissance_user;
    @ManyToMany
    @JoinTable(
            name = "user_produit",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "produit_id")
    )
    private Collection<produit> produits = new ArrayList<>();
}
