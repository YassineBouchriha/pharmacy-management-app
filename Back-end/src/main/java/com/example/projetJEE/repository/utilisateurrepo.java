package com.example.projetJEE.repository;

import com.example.projetJEE.entitys.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface utilisateurrepo extends JpaRepository<user, Long> {

}
