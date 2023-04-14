import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Competence } from '../Model/competence';
import { Contact } from '../Model/contact';
import { Cv } from '../Model/Cv';
import { Experience } from '../Model/experience';
import { Formation } from '../Model/formations';
import { Langue } from '../Model/langues';
import { CompetencesService } from '../services/competences.service';
import { ContactsService } from '../services/contacts.service';
import { CvService } from '../services/cv.service';
import { ExperienceService } from '../services/experience.service';
import { FormationService } from '../services/formation.service';
import { LanguesService } from '../services/langues.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CVComponent implements OnInit {

  selectedCv!: Cv;

  cvDialog: boolean = false;

  typeDialog = "";

  cvs!: Cv[];

  cv !: Cv;

  selectedCvs!: Cv[];
  formations !: Formation[];
  selectedformations !: Formation[];
  experiences !: Experience[];
  selectedexperiences !: Experience[];
  langues !: Langue[];
  selectedlangues !: Langue[];
  competences !: Competence[];
  selectedcompetences !: Competence[];
  contacts !: Contact[];

  submitted!: boolean;
  cvFormGroupe!: FormGroup;

  constructor(private cvservice: CvService, private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder, private competenceService: CompetencesService,
    private langueService: LanguesService,
    private experienceService: ExperienceService,
    private contactService: ContactsService,
    private formationService: FormationService) { }

  ngOnInit() {
    this.cvservice.getallcv().subscribe(data => {
      this.cvs = data;
      console.log(this.cvs)
    });
    this.competenceService.getallcompetence().subscribe(data => {
      this.competences = data;
      console.log(this.competences)
    });
    this.formationService.getallformation().subscribe(data => {
      this.formations = data;
      console.log(this.formations)
    });
    this.langueService.getallLangue().subscribe(data => {
      this.langues = data;
      console.log(this.langues)
    });
    this.contactService.getallcontact().subscribe(data => {
      this.contacts = data;
      console.log(this.contacts)
    });
    this.experienceService.getallexperience().subscribe(data => {
      this.experiences = data;
      console.log(this.experiences)
    });


    this.cvFormGroupe = this.fb.group({
      id: [""],
      nom: ["", Validators.required],
      prenom: ["", Validators.required],
      contact: ["", Validators.required],
      competences: [this.selectedcompetences, Validators.required],
      formations: [this.selectedformations, Validators.required],
      langues: [this.selectedlangues, Validators.required],
      experiences: [this.selectedexperiences, Validators.required],
    })
  }
  openNew() {
    this.typeDialog = "add"
    this.cvFormGroupe.reset();
    this.cv = {};
    this.submitted = false;
    this.cvDialog = true;
  }

  deleteSelectedCv() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selectedcvs?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.cvs = this.cvs.filter(val => this.selectedCvs.includes(val));

        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      }
    });
  }

  editCv(cv: any) {
    this.typeDialog = "edit"
    this.selectedCv = cv
    console.log(this.selectedCv);
    this.cvFormGroupe.patchValue(this.selectedCv)
    this.cv = { ...cv };
    this.cvDialog = true;
  }

  onDelete(cv: Cv) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected cvs?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',



      accept: () => {
        this.cvservice.deletecv(cv.id).subscribe(data => {

          this.cvservice.getallcv().subscribe(data => {
            this.cvs = data
          }


          )
        })

        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'cvs Deleted', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.cvDialog = false;
    this.submitted = false;
  }


  saveCv() {

    console.log(this.typeDialog)

    this.submitted! = true;
    //if (this.cvFormGroupe!.invalid) return;
    console.log(this.cvFormGroupe.value)
    if (this.typeDialog == 'add') {
      this.cvservice.savecv(this.cvFormGroupe.value).subscribe(data => {
        //if(data.status==='success' && data.data==1)
        this.cvservice.getallcv().subscribe(data => {
          this.cvs = data

          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'cv created', life: 3000 });

        })
        this.cvs = [...this.cvs];
        this.cvDialog = false;
        this.cv = {};

      })
    }
    else if (this.typeDialog == 'edit') {
      this.cvservice.savecv(this.cvFormGroupe!.value).subscribe(data => {
        // if(data.status==='success' && data.data==1)
        this.cvservice.getallcv().subscribe(data => {
          this.cvs = data

          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'cv updated', life: 3000 });

        })

        /* else alert("error")
         this.cvs = [...this.cvs];
                    this.cvDialog = false;
             this.cv = {};*/

      })
    }


    //    saveEditCv(){
    //       console.log(this.selectedCv)
    //       this.submitted! = true;
    //       if(this.cvFormGroupe!.invalid) return;
    //        else this.cvservice.editCv(this.cvFormGroupe!.value).subscribe(data=>{
    //           alert("secces")
    //   })
    //   }




    //       saveCv() {
    //           console.log(this.typeDialog)

    //           this.submitted! = true;
    //           if(this.cvFormGroupe!.invalid) return;

    //       if(this.typeDialog=='add')  {   this.cvservice.addCv(this.cvFormGroupe!.value).subscribe(data=>{
    //           if(data.status==='success' && data.data==1)
    //               alert("success")
    //               else alert("error")
    //           })
    //   }
    //           else if(this.typeDialog=='edit') {this.cvservice.updatecv(this.cvFormGroupe!.value,this.selectedCv.id).subscribe(data=>{
    //               if(data.status==='success' && data.data==1)
    //               alert("success")
    //               else alert("error")

    //      })}


    // if (this.cv.designation.trim()) {
    //     if (this.cv.id) {
    //         this.cvs[this.findIndexById(this.cv.id)] = this.cv;                
    //         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
    //     }
    //     else {
    //         this.cv.id = this.createId();
    //         this.cv.code = 'product-placeholder.svg';
    //         this.cvs.push(this.cv);
    //         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
    //     }

    //         this.cvs = [...this.cvs];
    //         this.cvDialog = false;
    //         this.cv = {};
    //     }
    // }

    // findIndexById(id: string): number {
    //     let index = -1;
    //     for (let i = 0; i < this.cvs.length; i++) {
    //         if (this.cvs[i].id === id) {
    //             index = i;
    //             break;
    //         }
    //     }

    //     return index;
    // }

    // createId(): string {
    //     let id = '';
    //     var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //     for ( var i = 0; i < 5; i++ ) {
    //         id += chars.charAt(Math.floor(Math.random() * chars.length));
    //     }
    //     return id;
    // }
  }

}
