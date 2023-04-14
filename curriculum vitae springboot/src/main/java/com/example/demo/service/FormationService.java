package com.example.demo.service;

import java.util.List;

import com.example.demo.entities.Formation;



public interface FormationService {
	
	public Formation saveFormation(Formation formation);
	public List<Formation> getalllistFormations();
    public Formation getFormationByid(Long id);
    
    public void deleteFormation(Long id_formation);

}
