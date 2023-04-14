package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.CV;

public interface CvRepository extends JpaRepository<CV, Long> {
	

}
