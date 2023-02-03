package com.example.projetJEE.repository;

import com.example.projetJEE.entitys.fournisseur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface fournisseurrepo extends JpaRepository<fournisseur, Long> {
}
