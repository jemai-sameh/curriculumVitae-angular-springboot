import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../Model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
 

  constructor(private httpClient:HttpClient) { }

  getallcontact():Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(environment.host+"/contact/listedecontacts")
  }
  savecontact(c:Contact):Observable<Contact>{
  return this.httpClient.post<Contact>(environment.host+"/contact/ajouter",c)
  }
  getcontactbyid(id:number):Observable<Contact>{
    return this.httpClient.get<Contact>(environment.host+"/contact/contactbyid/"+id)
  }
  deletecontact(id:number):Observable<void>{
    return this.httpClient.delete<void>(environment.host+"/contact/delete/"+id)
  }
  }

