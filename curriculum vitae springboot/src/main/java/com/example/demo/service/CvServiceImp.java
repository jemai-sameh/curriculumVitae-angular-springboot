package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.CV;
import com.example.demo.entities.Contact;
import com.example.demo.repository.ContactRepository;
import com.example.demo.repository.CvRepository;
@Service
public class CvServiceImp implements CvService{
	@Autowired
	private CvRepository cvRepository;
	@Autowired
	private ContactRepository contactRepository;
	

	

	@Override
	public CV saveCv(CV cv , Long id_contact) {
		Contact contact= contactRepository.findById(id_contact).get();
		cv.setContact(contact);
		return cvRepository.save(cv);
	}
	

	@Override
	public List<CV> getalllistCvs() {
		
		return cvRepository.findAll();
	}

	@Override
	public CV getCvByid(Long id) {
		
		return cvRepository.findById(id).get();
	}

	@Override
	public void deleteCV(Long cvid) {
		
		cvRepository.deleteById(cvid);
	}

}
