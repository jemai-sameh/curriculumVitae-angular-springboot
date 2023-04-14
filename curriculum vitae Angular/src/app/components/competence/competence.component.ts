import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Competence } from 'src/app/Model/competence';
import { CompetencesService } from 'src/app/services/competences.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {


  selectedCompetence! : Competence;
  
  competenceDialog: boolean = false;

   typeDialog="";

    competences!: Competence[];

    competence !: Competence;

    selectedCompetences!: Competence[];

    submitted!: boolean;
    competenceFormGroupe!:FormGroup;

    constructor(private competenceservice: CompetencesService, private messageService: MessageService, private confirmationService: ConfirmationService,private fb:FormBuilder) { }

    ngOnInit() {
        this.competenceservice.getallcompetence().subscribe(data =>{
            this.competences = data;
            console.log(this.competences)
            


        } );
        this.competenceFormGroupe=this.fb.group({
          id:[""],
          description:["",Validators.required],
          nom:["",Validators.required]
          

        })
    }
    openNew() {
        this.typeDialog="add"
        this.competenceFormGroupe.reset();
        this.competence = {};
        this.submitted = false;
        this.competenceDialog = true;
    }

    deleteSelectedCompetence() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selectedcompetences?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.competences = this.competences.filter(val => this.selectedCompetences.includes(val));
                
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
            }
        });
    }

    editCompetence(competence:any) {
      this.typeDialog="edit"
      this.selectedCompetence=competence
      console.log(this.selectedCompetence);
      this.competenceFormGroupe.patchValue(this.selectedCompetence)
      this.competence = {...competence};
      this.competenceDialog = true;
    }

    onDelete(competence:Competence) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete the selected competences?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
  
    
       
        accept: () => {
          this.competenceservice.deletecompetence(competence.id).subscribe(data=>{

              this.competenceservice.getallcompetence().subscribe(data=>{
                  this.competences=data
              }
              
  
              )
          })
          
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'competences Deleted', life: 3000});
      }
  });
    }

    hideDialog() {
        this.competenceDialog = false;
        this.submitted = false;
    }
    
 
    saveCompetence(){

  console.log(this.typeDialog)

  this.submitted! = true;
  if(this.competenceFormGroupe!.invalid) return;
     
if(this.typeDialog=='add')  {   this.competenceservice.savecompetence(this.competenceFormGroupe.value).subscribe(data=>{
  //if(data.status==='success' && data.data==1)
  this.competenceservice.getallcompetence().subscribe(data=>{
      this.competences=data
     
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'competence created', life: 3000});
       
  })
  this.competences = [...this.competences];
                 this.competenceDialog = false;
          this.competence = {};
      
  })
}
  else if(this.typeDialog=='edit') {this.competenceservice.savecompetence(this.competenceFormGroupe!.value).subscribe(data=>{
     // if(data.status==='success' && data.data==1)
      this.competenceservice.getallcompetence().subscribe(data=>{
          this.competences=data
         
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'competence updated', life: 3000});
           
      })
     
     /* else alert("error")
      this.competences = [...this.competences];
                 this.competenceDialog = false;
          this.competence = {};*/
    
})}
    

//    saveEditCompetence(){
//       console.log(this.selectedCompetence)
//       this.submitted! = true;
//       if(this.competenceFormGroupe!.invalid) return;
//        else this.competenceservice.editCompetence(this.competenceFormGroupe!.value).subscribe(data=>{
//           alert("secces")
//   })
//   }




//       saveCompetence() {
//           console.log(this.typeDialog)

//           this.submitted! = true;
//           if(this.competenceFormGroupe!.invalid) return;
           
//       if(this.typeDialog=='add')  {   this.competenceservice.addCompetence(this.competenceFormGroupe!.value).subscribe(data=>{
//           if(data.status==='success' && data.data==1)
//               alert("success")
//               else alert("error")
//           })
//   }
//           else if(this.typeDialog=='edit') {this.competenceservice.updatecompetence(this.competenceFormGroupe!.value,this.selectedCompetence.id).subscribe(data=>{
//               if(data.status==='success' && data.data==1)
//               alert("success")
//               else alert("error")

//      })}


        // if (this.competence.designation.trim()) {
        //     if (this.competence.id) {
        //         this.competences[this.findIndexById(this.competence.id)] = this.competence;                
        //         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
        //     }
        //     else {
        //         this.competence.id = this.createId();
        //         this.competence.code = 'product-placeholder.svg';
        //         this.competences.push(this.competence);
        //         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
        //     }

    //         this.competences = [...this.competences];
    //         this.competenceDialog = false;
    //         this.competence = {};
    //     }
    // }

    // findIndexById(id: string): number {
    //     let index = -1;
    //     for (let i = 0; i < this.competences.length; i++) {
    //         if (this.competences[i].id === id) {
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
