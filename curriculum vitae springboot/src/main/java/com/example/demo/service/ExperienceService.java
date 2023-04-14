package com.example.demo.service;

import java.util.List;

import com.example.demo.entities.Experience;


public interface ExperienceService {

	public Experience saveExperience(Experience experience);
	public List<Experience> getalllistExperiences();
    public Experience getExperienceByid(Long id);
    
	
    public void deleteExperience(Long id_experience);
}
