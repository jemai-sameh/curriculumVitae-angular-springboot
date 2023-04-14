package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Contact;

public interface ContactRepository  extends JpaRepository<Contact, Long>{

}
