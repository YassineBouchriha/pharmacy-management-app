package com.example.projetJEE.repository;

import com.example.projetJEE.entitys.produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository

public interface produitrepo extends JpaRepository<produit, Long> {
    @Modifying
    @Query(value= "UPDATE produit SET id_laboratoire= :labId WHERE id_produit= :id", nativeQuery= true)
    void updatelabprod(@Param("id") Long id, @Param("labId") Long labid);


}
