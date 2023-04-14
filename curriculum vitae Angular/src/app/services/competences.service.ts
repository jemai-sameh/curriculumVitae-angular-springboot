import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Competence } from '../Model/competence';

@Injectable({
  providedIn: 'root'
})
export class CompetencesService {

  constructor(private httpClient:HttpClient) { }
getallcompetence():Observable<Competence[]>{
  return this.httpClient.get<Competence[]>(environment.host+"/competence/listedecompetence")
}
savecompetence(c:Competence):Observable<Competence>{
return this.httpClient.post<Competence>(environment.host+"/competence/ajouter",c)
}
getcompetencebyid(id:number):Observable<Competence>{
  return this.httpClient.get<Competence>(environment.host+"/competence/competencebyid/"+id)
}
deletecompetence(id:number):Observable<void>{
  return this.httpClient.delete<void>(environment.host+"/competence/delete/"+id)
}
}
