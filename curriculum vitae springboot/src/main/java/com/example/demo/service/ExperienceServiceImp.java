package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Experience;
import com.example.demo.repository.ExperienceRepository;
@Service
public class ExperienceServiceImp implements ExperienceService{
	@Autowired
	private ExperienceRepository experienceRepository;

	@Override
	public Experience saveExperience(Experience experience) {
		
		return experienceRepository.save(experience);
	}

	@Override
	public List<Experience> getalllistExperiences() {
		
		return experienceRepository.findAll();
	}

	@Override
	public Experience getExperienceByid(Long id) {
		
		return experienceRepository.findById(id).get();
	}

	@Override
	public void deleteExperience(Long id_experience) {
		experienceRepository.delete(this.getExperienceByid(id_experience));
		
	}

}
