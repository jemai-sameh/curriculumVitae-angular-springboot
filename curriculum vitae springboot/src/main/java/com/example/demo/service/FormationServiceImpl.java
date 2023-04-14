package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Formation;
import com.example.demo.repository.FormationRepository;
@Service
public class FormationServiceImpl implements FormationService{
	@Autowired
	private FormationRepository formationRepository;

	@Override
	public Formation saveFormation(Formation formation) {
		
		return formationRepository.save(formation) ;
	}

	@Override
	public List<Formation> getalllistFormations() {
		
		return formationRepository.findAll();
	}

	@Override
	public Formation getFormationByid(Long id) {
		
		return formationRepository.findById(id).get();
	}

	@Override
	public void deleteFormation(Long id_formation) {
		formationRepository.delete(this.getFormationByid(id_formation));
		
	}

}
