import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../Model/contact';
import { Cv } from '../Model/Cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private httpClient:HttpClient) { }
  
  getallcv():Observable<Cv[]>{
    return this.httpClient.get<Cv[]>(environment.host+"/CV/listedecv")
  }
  savecv(c:Cv):Observable<Cv>{
 let id=c.contact;
 c.contact=null
    return this.httpClient.post<Cv>(environment.host+"/CV/ajouter/"+id,c)
  }
  getcvbyid(id:number):Observable<Cv>{
    return this.httpClient.get<Cv>(environment.host+"/CV/cvbyid/"+id)
  }
  deletecv(id:number):Observable<void>{
    return this.httpClient.delete<void>(environment.host+"/CV/delete/"+id)
  }
}
