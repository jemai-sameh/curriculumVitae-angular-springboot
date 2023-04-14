import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public GMAOUser:string|undefined;
 public isloggedin: Boolean = false;
  readonly  host=environment.host+'authentification/';
  private user:any
  constructor(private http:HttpClient,private router:Router) { }
  // login(data:any){
  // this.http.post<any>(this.host+'login',data).toPromise().then((resp)=>{
  //   if(resp.status==200)
  //     {this.user=resp.user
  //     localStorage.setItem("GMAOUser",JSON.stringify(this.user) );
      
  //     this.isloggedin=true;
  //     localStorage.setItem('isloggedIn',String(true));
      
  //     localStorage.setItem('loggedUser',String(this.isloggedin));
     
    
  //       this.router.navigate(['/'])
     
    
      
      
     
  //   }else  this.logOut()
  // })
  // }

  
  getRole(){
   var user:any
   user= localStorage.getItem('GMAOUser')
  // return JSON.parse(user).role
  }
  verifAuth(){
   var user:any
   user= localStorage.getItem('GMAOUser')
  console.log(user)
 // if(JSON.parse(user)==undefined) this.router.navigate(['/login'])
  //else{
  //  this.login(JSON.parse(user))
 // }
  }
  logOut(){
    console.log('log out')
    localStorage.setItem("GMAOUser",'' );
    this.isloggedin =false;
    localStorage.setItem('isloggedIn',String(this.isloggedin));

    this.user='';
    this.router.navigate(['/login'])
  }
  setLoggedUserFromLocalStorage(login : string) {
    this.GMAOUser = login;
    this.isloggedin= true;

   // this.getUserRoles(login);
    }
}
