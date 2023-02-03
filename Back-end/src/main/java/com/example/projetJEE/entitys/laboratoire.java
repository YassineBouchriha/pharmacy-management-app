package com.example.projetJEE.entitys;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Data
public class laboratoire {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_laboratoire;
    private String lib_laboratoire;
    private String adrs_laboratoire;
    private int tel_laboratoire;
    private String email_laboratoire;

    @OneToMany(mappedBy = "laboratoire", cascade = CascadeType.REMOVE)
    @JsonIgnore
    private Collection<produit> produits = new ArrayList<>();
}
