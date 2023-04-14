package com.example.demo.service;

import java.util.List;

import com.example.demo.entities.Contact;


public interface ContactService {

	public Contact saveContact(Contact contact);
	public List<Contact> getalllistContacts();
    public Contact getContactByid(Long id);
    
    public void deleteContact(Long id_contact);
}
