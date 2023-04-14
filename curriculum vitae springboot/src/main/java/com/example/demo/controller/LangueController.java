package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Langue;
import com.example.demo.service.LangueService;

@CrossOrigin("http://localhost:4200")
@RestController

@RequestMapping("/langue")
public class LangueController {
	
	@Autowired
	private LangueService langueService;

	@PostMapping("/ajouter")
	public Langue saveLangue(@RequestBody Langue langue) {
		return langueService.saveLangue(langue);
	}

	@GetMapping("/listedelangue")
	public List<Langue> getalllistLangues() {
		return langueService.getalllistLangues();
	}

	@GetMapping("/languebyid/{id}")
	public Langue getLangueByid(@PathVariable("id") Long id) {
		return langueService.getLangueByid(id);
	}

	@DeleteMapping("/delete/{id}")
	public void deleteLangue(@PathVariable("id") Long id_langue) {
		langueService.deleteLangue(id_langue);
	}
	
	

}
