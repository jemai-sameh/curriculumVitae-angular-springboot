package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Contact;
import com.example.demo.repository.ContactRepository;
@Service
public class ContactServiceImp implements ContactService{
	@Autowired
	private ContactRepository contactRepository;

	@Override
	public Contact saveContact(Contact contact) {
		
		return contactRepository.save(contact);
	}

	@Override
	public List<Contact> getalllistContacts() {
		
		return contactRepository.findAll();
	}

	@Override
	public Contact getContactByid(Long id) {
		
		return contactRepository.findById(id).get();
	}

	@Override
	public void deleteContact(Long id_contact) {
		
		contactRepository.delete(this.getContactByid(id_contact));
	}
}
