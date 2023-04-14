package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Langue;
import com.example.demo.repository.LangueRepository;
@Service
public class LangueServiceImp implements LangueService {
	@Autowired
	private LangueRepository langueRepository;

	@Override
	public Langue saveLangue(Langue langue) {
		
		return langueRepository.save(langue);
	}

	@Override
	public List<Langue> getalllistLangues() {
		
		return langueRepository.findAll();
	}

	@Override
	public Langue getLangueByid(Long id) {
	
		return langueRepository.findById(id).get();
	}

	@Override
	public void deleteLangue(Long id_langue) {
		langueRepository.delete(this.getLangueByid(id_langue));
		
	}

}
