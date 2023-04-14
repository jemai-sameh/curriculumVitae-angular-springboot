import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Langue } from '../Model/langues';


@Injectable({
  providedIn: 'root'
})
export class LanguesService {

  constructor(private httpClient:HttpClient) { }

  getallLangue():Observable<Langue[]>{
    return this.httpClient.get<Langue[]>(environment.host+"/langue/listedelangue")
  }
  saveLangue(c:Langue):Observable<Langue>{
  return this.httpClient.post<Langue>(environment.host+"/langue/ajouter",c)
  }
  getLanguebyid(id:number):Observable<Langue>{
    return this.httpClient.get<Langue>(environment.host+"/langue/languebyid/"+id)
  }
  deleteLangue(id:number):Observable<void>{
    return this.httpClient.delete<void>(environment.host+"/langue/delete/"+id)
  }
}
