package com.example.projetJEE.repository;

import com.example.projetJEE.entitys.famille;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface famillerepo extends JpaRepository<famille, Long> {
}
