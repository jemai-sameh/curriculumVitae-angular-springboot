import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Langue } from '../Model/langues';
import { LanguesService } from '../services/langues.service';

@Component({
  selector: 'app-langue',
  templateUrl: './langue.component.html',
  styleUrls: ['./langue.component.scss']
})
export class LangueComponent implements OnInit {

  selectedLangue! : Langue;
  
  langueDialog: boolean = false;

   typeDialog="";

    langues!: Langue[];

    langue !: Langue;

    selectedLangues!: Langue[];

    submitted!: boolean;
    langueFormGroupe!:FormGroup;

    constructor(private langueservice: LanguesService, private messageService: MessageService, private confirmationService: ConfirmationService,private fb:FormBuilder) { }

    ngOnInit() {
        this.langueservice.getallLangue().subscribe(data =>{
            this.langues = data;
            console.log(this.langues)
            


        } );
        this.langueFormGroupe=this.fb.group({
          id:[""],
          langue:["",Validators.required],
          niveau:["",Validators.required]
          

        })
    }
    openNew() {
        this.typeDialog="add"
        this.langueFormGroupe.reset();
        this.langue = {};
        this.submitted = false;
        this.langueDialog = true;
    }

    deleteSelectedLangue() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selectedlangues?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.langues = this.langues.filter(val => this.selectedLangues.includes(val));
                
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
            }
        });
    }

    editLangue(langue:any) {
      this.typeDialog="edit"
      this.selectedLangue=langue
      console.log(this.selectedLangue);
      this.langueFormGroupe.patchValue(this.selectedLangue)
      this.langue = {...langue};
      this.langueDialog = true;
    }

    onDelete(langue:Langue) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete the selected langues?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
  
    
       
        accept: () => {
          this.langueservice.deleteLangue(langue.id).subscribe(data=>{

              this.langueservice.getallLangue().subscribe(data=>{
                  this.langues=data
              }
              
  
              )
          })
          
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'langues Deleted', life: 3000});
      }
  });
    }

    hideDialog() {
        this.langueDialog = false;
        this.submitted = false;
    }
    
 
    saveLangue(){

  console.log(this.typeDialog)

  this.submitted! = true;
  if(this.langueFormGroupe!.invalid) return;
     
if(this.typeDialog=='add')  {   this.langueservice.saveLangue(this.langueFormGroupe.value).subscribe(data=>{
  //if(data.status==='success' && data.data==1)
  this.langueservice.getallLangue().subscribe(data=>{
      this.langues=data
     
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'langue created', life: 3000});
       
  })
  this.langues = [...this.langues];
                 this.langueDialog = false;
          this.langue = {};
      
  })
}
  else if(this.typeDialog=='edit') {this.langueservice.saveLangue(this.langueFormGroupe!.value).subscribe(data=>{
     // if(data.status==='success' && data.data==1)
      this.langueservice.getallLangue().subscribe(data=>{
          this.langues=data
         
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'langue updated', life: 3000});
           
      })
     
     /* else alert("error")
      this.langues = [...this.langues];
                 this.langueDialog = false;
          this.langue = {};*/
    
})}
    

//    saveEditLangue(){
//       console.log(this.selectedLangue)
//       this.submitted! = true;
//       if(this.langueFormGroupe!.invalid) return;
//        else this.langueservice.editLangue(this.langueFormGroupe!.value).subscribe(data=>{
//           alert("secces")
//   })
//   }




//       saveLangue() {
//           console.log(this.typeDialog)

//           this.submitted! = true;
//           if(this.langueFormGroupe!.invalid) return;
           
//       if(this.typeDialog=='add')  {   this.langueservice.addLangue(this.langueFormGroupe!.value).subscribe(data=>{
//           if(data.status==='success' && data.data==1)
//               alert("success")
//               else alert("error")
//           })
//   }
//           else if(this.typeDialog=='edit') {this.langueservice.updatelangue(this.langueFormGroupe!.value,this.selectedLangue.id).subscribe(data=>{
//               if(data.status==='success' && data.data==1)
//               alert("success")
//               else alert("error")

//      })}


        // if (this.langue.designation.trim()) {
        //     if (this.langue.id) {
        //         this.langues[this.findIndexById(this.langue.id)] = this.langue;                
        //         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
        //     }
        //     else {
        //         this.langue.id = this.createId();
        //         this.langue.code = 'product-placeholder.svg';
        //         this.langues.push(this.langue);
        //         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
        //     }

    //         this.langues = [...this.langues];
    //         this.langueDialog = false;
    //         this.langue = {};
    //     }
    // }

    // findIndexById(id: string): number {
    //     let index = -1;
    //     for (let i = 0; i < this.langues.length; i++) {
    //         if (this.langues[i].id === id) {
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
