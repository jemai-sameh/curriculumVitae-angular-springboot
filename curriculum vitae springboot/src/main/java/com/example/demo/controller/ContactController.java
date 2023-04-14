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
import com.example.demo.entities.Contact;
import com.example.demo.service.ContactService;

@CrossOrigin ("http://localhost:4200")
@RestController

@RequestMapping("/contact")
public class ContactController {
	@Autowired
	private ContactService contactService;
	
	
	@PostMapping("/ajouter")
    public Contact saveContact(@RequestBody Contact contact) {
	
	return contactService.saveContact(contact);
}
    
    @GetMapping("/listedecontacts")
    public List<Contact> getalllistContacts() {
		
		return contactService.getalllistContacts();
	}
    
    
    @GetMapping("/contactbyid/{id}")
    public Contact getContactByContact(@PathVariable Long id) {
		
		return contactService.getContactByid(id);
	}
    @DeleteMapping("/delete/{id_contact}")
    public void deleteContact(@PathVariable("id_contact") Long id_contact) {
    	contactService.deleteContact(id_contact);
		
	}
	

}
