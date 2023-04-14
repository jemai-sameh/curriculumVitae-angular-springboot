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

import com.example.demo.entities.Experience;
import com.example.demo.service.ExperienceService;

@CrossOrigin("http://localhost:4200")
@RestController

@RequestMapping("/experience")
public class ExperienceController {
	
	@Autowired
	private ExperienceService experienceService;
	
	
    @PostMapping("/ajouter")
	public Experience saveExperience(@RequestBody Experience experience) {
		return experienceService.saveExperience(experience);
	}

    @GetMapping("/listedexperience")
	public List<Experience> getalllistExperiences() {
		return experienceService.getalllistExperiences();
	}

    @GetMapping("/experiencebyid/{id}")
	public Experience getExperienceByid(@PathVariable Long id) {
		return experienceService.getExperienceByid(id);
	}

    @DeleteMapping("/delete/{id}")
	public void deleteExperience(@PathVariable("id") Long id_experience) {
		experienceService.deleteExperience(id_experience);
	}
	
	

}
