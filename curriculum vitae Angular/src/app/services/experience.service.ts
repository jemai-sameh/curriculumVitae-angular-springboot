import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experience } from '../Model/experience';


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
 

  constructor(private httpClient:HttpClient) { }

  getallexperience():Observable<Experience[]>{
    return this.httpClient.get<Experience[]>(environment.host+"/experience/listedexperience")
  }
  saveexperience(c:Experience):Observable<Experience>{
  return this.httpClient.post<Experience>(environment.host+"/experience/ajouter",c)
  }
  getexperiencebyid(id:number):Observable<Experience>{
    return this.httpClient.get<Experience>(environment.host+"/experience/experiencebyid/"+id)
  }
  deleteexperience(id:number):Observable<void>{
    return this.httpClient.delete<void>(environment.host+"/experience/delete/"+id)
  }
}
