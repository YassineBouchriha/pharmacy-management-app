package com.example.projetJEE.repository;

import com.example.projetJEE.entitys.laboratoire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface laboratoirerepo extends JpaRepository<laboratoire, Long> {
}
