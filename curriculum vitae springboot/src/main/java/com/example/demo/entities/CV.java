package com.example.demo.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class CV {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    
    private String nom;
    
    private String prenom;

    

    @OneToMany()
    private List<Competence> competences;

    @OneToMany()
    private List<Formation> formations;

    @OneToMany()
    private List<Langue> langues;

    @OneToMany()
    private List<Experience> experiences;
     
    @OneToOne()
    private Contact contact;
    

    public CV() {
    }

    

    public CV(Long id, String nom, String prenom, List<Competence> competences,
			List<Formation> formations, List<Langue> langues, List<Experience> experiences, Contact contact) {
		super();
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.competences = competences;
		this.formations = formations;
		this.langues = langues;
		this.experiences = experiences;
		this.contact = contact;
	}



	// getters and setters

    public CV(Long id, String nom, String prenom, Contact contact) {
		super();
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.contact = contact;
	}



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public String getNom() {
		return nom;
	}



	public void setNom(String nom) {
		this.nom = nom;
	}



	public String getPrenom() {
		return prenom;
	}



	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}



	public List<Competence> getCompetences() {
		return competences;
	}



	public void setCompetences(List<Competence> competences) {
		this.competences = competences;
	}



	public List<Formation> getFormations() {
		return formations;
	}



	public void setFormations(List<Formation> formations) {
		this.formations = formations;
	}



	public List<Langue> getLangues() {
		return langues;
	}



	public void setLangues(List<Langue> langues) {
		this.langues = langues;
	}



	public List<Experience> getExperiences() {
		return experiences;
	}



	public void setExperiences(List<Experience> experiences) {
		this.experiences = experiences;
	}



	public Contact getContact() {
		return contact;
	}



	public void setContact(Contact contact) {
		this.contact = contact;
	}


}