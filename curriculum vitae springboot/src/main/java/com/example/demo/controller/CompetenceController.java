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

import com.example.demo.entities.Competence;
import com.example.demo.service.CompetenceService;


@CrossOrigin ("http://localhost:4200")
@RestController


@RequestMapping("/competence")
public class CompetenceController {
	@Autowired
private CompetenceService competenceService;
	
	
   @PostMapping("/ajouter")
	public Competence saveCompetence(@RequestBody Competence competence) {
		return competenceService.saveCompetence(competence);
	}
    @GetMapping("/listedecompetence")
	public List<Competence> getalllistCompetences() {
		return competenceService.getalllistCompetences();
	}
    @GetMapping("/competencebyid/{id}")
	public Competence getCompetenceByid(@PathVariable Long id) {
		return competenceService.getCompetenceByid(id);
	}
    @DeleteMapping("/delete/{id}")
	public void deleteCompetence(@PathVariable("id") Long id_competence) {
		competenceService.deleteCompetence(id_competence);
	}
	
	
	
	
}
