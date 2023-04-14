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

import com.example.demo.entities.Formation;
import com.example.demo.service.FormationService;

@RestController
@CrossOrigin ("http://localhost:4200")

@RequestMapping("/formation")
public class FormationController {
	@Autowired
	private FormationService formationService;

	@PostMapping("/ajouter")
	public Formation saveFormation(@RequestBody Formation formation) {
		return formationService.saveFormation(formation);
	}

	@GetMapping("/listedeformation")
	public List<Formation> getalllistFormations() {
		return formationService.getalllistFormations();
	}

	@GetMapping("/formationbyid/{id}")
	public Formation getFormationByid(@PathVariable Long id) {
		return formationService.getFormationByid(id);
	}
	

	@DeleteMapping("/delete/{id}")
	public void deleteFormation(@PathVariable("id") Long id_formation) {
		formationService.deleteFormation(id_formation);
	}
	
	
	

}
