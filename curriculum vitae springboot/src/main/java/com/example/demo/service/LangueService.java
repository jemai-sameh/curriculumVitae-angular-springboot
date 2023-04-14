package com.example.demo.service;

import java.util.List;

import com.example.demo.entities.Langue;



public interface LangueService {
	
	public Langue saveLangue(Langue langue);
	public List<Langue> getalllistLangues();
    public Langue getLangueByid(Long id);
    
    public void deleteLangue(Long id_langue);

}
