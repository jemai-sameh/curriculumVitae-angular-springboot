import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Experience } from '../Model/experience';




import { ExperienceService } from '../services/experience.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  selectedExperience! : Experience;
  
  experienceDialog: boolean = false;

   typeDialog="";

    experiences!: Experience[];

    experience !: Experience;

    selectedExperiences!: Experience[];

    submitted!: boolean;
    experienceFormGroupe!:FormGroup;

    constructor(private experienceservice: ExperienceService, private messageService: MessageService, private confirmationService: ConfirmationService,private fb:FormBuilder) { }

    ngOnInit() {
        this.experienceservice.getallexperience().subscribe(data =>{
            this.experiences = data;
            console.log(this.experiences)
            


        } );
        this.experienceFormGroupe=this.fb.group({
          id:[""],
          titre:["",Validators.required],
          entreprise:["",Validators.required],
          description:["",Validators.required],
          dateDebut :["",Validators.required],
          dateFin : ["",Validators.required],
          

        })
    }
    openNew() {
        this.typeDialog="add"
        this.experienceFormGroupe.reset();
        this.experience = {};
        this.submitted = false;
        this.experienceDialog = true;
    }

    deleteSelectedExperience() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selectedexperiences?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.experiences = this.experiences.filter(val => this.selectedExperiences.includes(val));
                
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
            }
        });
    }

    editExperience(experience:any) {
      this.typeDialog="edit"
      this.selectedExperience=experience
      console.log(this.selectedExperience);
      this.experienceFormGroupe.patchValue(this.selectedExperience)
      this.experience = {...experience};
      this.experienceDialog = true;
    }

    onDelete(experience:Experience) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete the selected experiences?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
  
    
       
        accept: () => {
          this.experienceservice.deleteexperience(experience.id).subscribe(data=>{

              this.experienceservice.getallexperience().subscribe(data=>{
                  this.experiences=data
              }
              
  
              )
          })
          
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'experiences Deleted', life: 3000});
      }
  });
    }

    hideDialog() {
        this.experienceDialog = false;
        this.submitted = false;
    }
    
 
    saveExperience(){

  console.log(this.typeDialog)

  this.submitted! = true;
  if(this.experienceFormGroupe!.invalid) return;
     
if(this.typeDialog=='add')  {   this.experienceservice.saveexperience(this.experienceFormGroupe.value).subscribe(data=>{
  //if(data.status==='success' && data.data==1)
  this.experienceservice.getallexperience().subscribe(data=>{
      this.experiences=data
     
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'experience created', life: 3000});
       
  })
  this.experiences = [...this.experiences];
                 this.experienceDialog = false;
          this.experience = {};
      
  })
}
  else if(this.typeDialog=='edit') {this.experienceservice.saveexperience(this.experienceFormGroupe!.value).subscribe(data=>{
     // if(data.status==='success' && data.data==1)
      this.experienceservice.getallexperience().subscribe(data=>{
          this.experiences=data
         
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'experience updated', life: 3000});
           
      })
     
     /* else alert("error")
      this.experiences = [...this.experiences];
                 this.experienceDialog = false;
          this.experience = {};*/
    
})}
    

//    saveEditExperience(){
//       console.log(this.selectedExperience)
//       this.submitted! = true;
//       if(this.experienceFormGroupe!.invalid) return;
//        else this.experienceservice.editExperience(this.experienceFormGroupe!.value).subscribe(data=>{
//           alert("secces")
//   })
//   }




//       saveExperience() {
//           console.log(this.typeDialog)

//           this.submitted! = true;
//           if(this.experienceFormGroupe!.invalid) return;
           
//       if(this.typeDialog=='add')  {   this.experienceservice.addExperience(this.experienceFormGroupe!.value).subscribe(data=>{
//           if(data.status==='success' && data.data==1)
//               alert("success")
//               else alert("error")
//           })
//   }
//           else if(this.typeDialog=='edit') {this.experienceservice.updateexperience(this.experienceFormGroupe!.value,this.selectedExperience.id).subscribe(data=>{
//               if(data.status==='success' && data.data==1)
//               alert("success")
//               else alert("error")

//      })}


        // if (this.experience.designation.trim()) {
        //     if (this.experience.id) {
        //         this.experiences[this.findIndexById(this.experience.id)] = this.experience;                
        //         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
        //     }
        //     else {
        //         this.experience.id = this.createId();
        //         this.experience.code = 'product-placeholder.svg';
        //         this.experiences.push(this.experience);
        //         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
        //     }

    //         this.experiences = [...this.experiences];
    //         this.experienceDialog = false;
    //         this.experience = {};
    //     }
    // }

    // findIndexById(id: string): number {
    //     let index = -1;
    //     for (let i = 0; i < this.experiences.length; i++) {
    //         if (this.experiences[i].id === id) {
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