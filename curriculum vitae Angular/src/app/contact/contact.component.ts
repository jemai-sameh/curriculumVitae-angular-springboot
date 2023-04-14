import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Contact } from '../Model/contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  selectedContact! : Contact;
  
  contactDialog: boolean = false;

   typeDialog="";

    contacts!: Contact[];

    contact !: Contact;

    selectedContacts!: Contact[];

    submitted!: boolean;
    contactFormGroupe!:FormGroup;

    constructor(private contactservice: ContactsService, private messageService: MessageService, private confirmationService: ConfirmationService,private fb:FormBuilder) { }

    ngOnInit() {
        this.contactservice.getallcontact().subscribe(data =>{
            this.contacts = data;
            console.log(this.contacts)
            


        } );
        this.contactFormGroupe=this.fb.group({
          id:[""],
          nom:["",Validators.required],
          prenom:["",Validators.required],
          email:["",Validators.required],
          telephone:["",Validators.required]
          

        })
    }
    openNew() {
        this.typeDialog="add"
        this.contactFormGroupe.reset();
        this.contact = {};
        this.submitted = false;
        this.contactDialog = true;
    }

    deleteSelectedContact() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selectedcontacts?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.contacts = this.contacts.filter(val => this.selectedContacts.includes(val));
                
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
            }
        });
    }

    editContact(contact:any) {
      this.typeDialog="edit"
      this.selectedContact=contact
      console.log(this.selectedContact);
      this.contactFormGroupe.patchValue(this.selectedContact)
      this.contact = {...contact};
      this.contactDialog = true;
    }

    onDelete(contact:Contact) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete the selected contacts?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
  
    
       
        accept: () => {
          this.contactservice.deletecontact(contact.id).subscribe(data=>{

              this.contactservice.getallcontact().subscribe(data=>{
                  this.contacts=data
              }
              
  
              )
          })
          
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'contacts Deleted', life: 3000});
      }
  });
    }

    hideDialog() {
        this.contactDialog = false;
        this.submitted = false;
    }
    
 
    saveContact(){

  console.log(this.typeDialog)

  this.submitted! = true;
  if(this.contactFormGroupe!.invalid) return;
     
if(this.typeDialog=='add')  {   this.contactservice.savecontact(this.contactFormGroupe.value).subscribe(data=>{
  //if(data.status==='success' && data.data==1)
  this.contactservice.getallcontact().subscribe(data=>{
      this.contacts=data
     
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'contact created', life: 3000});
       
  })
  this.contacts = [...this.contacts]; 
                 this.contactDialog = false;
          this.contact = {};
      
  })
}
  else if(this.typeDialog=='edit') {this.contactservice.savecontact(this.contactFormGroupe!.value).subscribe(data=>{
     // if(data.status==='success' && data.data==1)
      this.contactservice.getallcontact().subscribe(data=>{
          this.contacts=data
         
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'contact updated', life: 3000});
           
      })
     
     /* else alert("error")
      this.contacts = [...this.contacts];
                 this.contactDialog = false;
          this.contact = {};*/
    
})}
    

//    saveEditContact(){
//       console.log(this.selectedContact)
//       this.submitted! = true;
//       if(this.contactFormGroupe!.invalid) return;
//        else this.contactservice.editContact(this.contactFormGroupe!.value).subscribe(data=>{
//           alert("secces")
//   })
//   }




//       saveContact() {
//           console.log(this.typeDialog)

//           this.submitted! = true;
//           if(this.contactFormGroupe!.invalid) return;
           
//       if(this.typeDialog=='add')  {   this.contactservice.addContact(this.contactFormGroupe!.value).subscribe(data=>{
//           if(data.status==='success' && data.data==1)
//               alert("success")
//               else alert("error")
//           })
//   }
//           else if(this.typeDialog=='edit') {this.contactservice.updatecontact(this.contactFormGroupe!.value,this.selectedContact.id).subscribe(data=>{
//               if(data.status==='success' && data.data==1)
//               alert("success")
//               else alert("error")

//      })}


        // if (this.contact.designation.trim()) {
        //     if (this.contact.id) {
        //         this.contacts[this.findIndexById(this.contact.id)] = this.contact;                
        //         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
        //     }
        //     else {
        //         this.contact.id = this.createId();
        //         this.contact.code = 'product-placeholder.svg';
        //         this.contacts.push(this.contact);
        //         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
        //     }

    //         this.contacts = [...this.contacts];
    //         this.contactDialog = false;
    //         this.contact = {};
    //     }
    // }

    // findIndexById(id: string): number {
    //     let index = -1;
    //     for (let i = 0; i < this.contacts.length; i++) {
    //         if (this.contacts[i].id === id) {
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



