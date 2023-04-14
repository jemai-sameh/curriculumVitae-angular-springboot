package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Competence;
import com.example.demo.repository.CompetenceRepository;
@Service
public class CompetenceServiceImp implements CompetenceService{
	@Autowired
	private CompetenceRepository competenceRepository;

	@Override
	public Competence saveCompetence(Competence competence) {
		
		return competenceRepository.save(competence);
	}

	@Override
	public List<Competence> getalllistCompetences() {
		
		return competenceRepository.findAll();
	}

	@Override
	public Competence getCompetenceByid(Long id) {
		
		return competenceRepository.findById(id).get();
	}
	
	@Override
	public void deleteCompetence(Long id_competence) {
		competenceRepository.delete(this.getCompetenceByid(id_competence));
		
	}

}
