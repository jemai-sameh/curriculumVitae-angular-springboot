package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.CV;
import com.example.demo.repository.CvRepository;
import com.example.demo.service.CvService;

@CrossOrigin ("http://localhost:4200")
@RestController


@RequestMapping("/CV")
public class CvController {
	
	@Autowired
	private CvService cvService;
	

	@PostMapping("/ajouter/{id}")
	public CV saveCv(@RequestBody CV cv , @PathVariable Long id) {
		return cvService.saveCv(cv , id);
	}

	@GetMapping("/listedecv")
	public List<CV> getalllistCvs() {
		return cvService.getalllistCvs();
	}

	@GetMapping("/cvbyid/{id}")
	public CV getCvByid(@PathVariable("id") Long id) {
		return cvService.getCvByid(id);
	}

	@DeleteMapping("/delete/{id}")
	public void deleteCV(@PathVariable("id") Long id_cv) {
		cvService.deleteCV(id_cv);
	}
	
	   
	
	

}
