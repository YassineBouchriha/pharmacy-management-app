package com.example.projetJEE.repository;

import com.example.projetJEE.entitys.facture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface facturerepo extends JpaRepository<facture, Long> {
}
