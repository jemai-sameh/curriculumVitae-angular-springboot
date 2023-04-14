import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Formation } from '../Model/formations';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  selectedFormation! : Formation;
  
  formationDialog: boolean = false;

   typeDialog="";

    formations!: Formation[];

    formation !: Formation;

    selectedFormations!: Formation[];

    submitted!: boolean;
    formationFormGroupe!:FormGroup;

    constructor(private formationservice: FormationService, private messageService: MessageService, private confirmationService: ConfirmationService,private fb:FormBuilder) { }

    ngOnInit() {
        this.formationservice.getallformation().subscribe(data =>{
            this.formations = data;
            console.log(this.formations)
            


        } );
        this.formationFormGroupe=this.fb.group({
          id:[""],
          description:["",Validators.required],
          nom:["",Validators.required],
          dateDebut :["",Validators.required],
          dateFin : ["",Validators.required],
          

        })
    }
    openNew() {
        this.typeDialog="add"
        this.formationFormGroupe.reset();
        this.formation = {};
        this.submitted = false;
        this.formationDialog = true;
    }

    deleteSelectedFormation() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selectedformations?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.formations = this.formations.filter(val => this.selectedFormations.includes(val));
                
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
            }
        });
    }

    editFormation(formation:any) {
      this.typeDialog="edit"
      this.selectedFormation=formation
      console.log(this.selectedFormation);
      this.formationFormGroupe.patchValue(this.selectedFormation)
      this.formation = {...formation};
      this.formationDialog = true;
    }

    onDelete(formation:Formation) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete the selected formations?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
  
    
       
        accept: () => {
          this.formationservice.deleteformation(formation.id).subscribe(data=>{

              this.formationservice.getallformation().subscribe(data=>{
                  this.formations=data
              }
              
  
              )
          })
          
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'formations Deleted', life: 3000});
      }
  });
    }

    hideDialog() {
        this.formationDialog = false;
        this.submitted = false;
    }
    
 
    saveFormation(){

  console.log(this.typeDialog)

  this.submitted! = true;
  if(this.formationFormGroupe!.invalid) return;
     
if(this.typeDialog=='add')  {   this.formationservice.saveformation(this.formationFormGroupe.value).subscribe(data=>{
  //if(data.status==='success' && data.data==1)
  this.formationservice.getallformation().subscribe(data=>{
      this.formations=data
     
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'formation created', life: 3000});
       
  })
  this.formations = [...this.formations];
                 this.formationDialog = false;
          this.formation = {};
      
  })
}
  else if(this.typeDialog=='edit') {this.formationservice.saveformation(this.formationFormGroupe!.value).subscribe(data=>{
     // if(data.status==='success' && data.data==1)
      this.formationservice.getallformation().subscribe(data=>{
          this.formations=data
         
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'formation updated', life: 3000});
           
      })
     
     /* else alert("error")
      this.formations = [...this.formations];
                 this.formationDialog = false;
          this.formation = {};*/
    
})}
    

//    saveEditFormation(){
//       console.log(this.selectedFormation)
//       this.submitted! = true;
//       if(this.formationFormGroupe!.invalid) return;
//        else this.formationservice.editFormation(this.formationFormGroupe!.value).subscribe(data=>{
//           alert("secces")
//   })
//   }




//       saveFormation() {
//           console.log(this.typeDialog)

//           this.submitted! = true;
//           if(this.formationFormGroupe!.invalid) return;
           
//       if(this.typeDialog=='add')  {   this.formationservice.addFormation(this.formationFormGroupe!.value).subscribe(data=>{
//           if(data.status==='success' && data.data==1)
//               alert("success")
//               else alert("error")
//           })
//   }
//           else if(this.typeDialog=='edit') {this.formationservice.updateformation(this.formationFormGroupe!.value,this.selectedFormation.id).subscribe(data=>{
//               if(data.status==='success' && data.data==1)
//               alert("success")
//               else alert("error")

//      })}


        // if (this.formation.designation.trim()) {
        //     if (this.formation.id) {
        //         this.formations[this.findIndexById(this.formation.id)] = this.formation;                
        //         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
        //     }
        //     else {
        //         this.formation.id = this.createId();
        //         this.formation.code = 'product-placeholder.svg';
        //         this.formations.push(this.formation);
        //         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
        //     }

    //         this.formations = [...this.formations];
    //         this.formationDialog = false;
    //         this.formation = {};
    //     }
    // }

    // findIndexById(id: string): number {
    //     let index = -1;
    //     for (let i = 0; i < this.formations.length; i++) {
    //         if (this.formations[i].id === id) {
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

