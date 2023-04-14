import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Formation } from '../Model/formations';


@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private httpClient:HttpClient) { }

  getallformation():Observable<Formation[]>{
    return this.httpClient.get<Formation[]>(environment.host+"/formation/listedeformation")
  }
  saveformation(c:Formation):Observable<Formation>{
  return this.httpClient.post<Formation>(environment.host+"/formation/ajouter",c)
  }
  getformationbyid(id:number):Observable<Formation>{
    return this.httpClient.get<Formation>(environment.host+"/formation/formationbyid/"+id)
  }
  deleteformation(id:number):Observable<void>{
    return this.httpClient.delete<void>(environment.host+"/formation/delete/"+id)
  }
}
