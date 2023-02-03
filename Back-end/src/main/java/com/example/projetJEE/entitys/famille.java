package com.example.projetJEE.entitys;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Data
public class famille {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_famille;
    private String lib_famille;

    @OneToMany(mappedBy = "famille")
    @JsonIgnore
    private Collection<produit> produits = new ArrayList<>();
}
