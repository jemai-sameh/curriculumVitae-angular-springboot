package com.example.demo.service;

import java.util.List;

import com.example.demo.entities.CV;



public interface CvService {
	
	 CV saveCv(CV cv , Long id_contact);
	 List<CV> getalllistCvs();
     CV getCvByid(Long id);
    
     void deleteCV(Long id_cv);
     
}


