package com.example.demo.service;

import java.util.List;

import com.example.demo.entities.CV;
import com.example.demo.entities.Competence;

public interface CompetenceService {
	public Competence saveCompetence(Competence competence);
	public List<Competence> getalllistCompetences();
    public Competence getCompetenceByid(Long id);
    
    public void deleteCompetence(Long id_competence);

}
