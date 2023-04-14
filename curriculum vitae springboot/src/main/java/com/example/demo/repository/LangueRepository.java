package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Langue;

public interface LangueRepository extends JpaRepository<Langue, Long> {

}
