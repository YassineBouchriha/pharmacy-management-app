import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { NgFor } from '@angular/common';
import { AppGuardService } from '../service/guard/app-guard.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public router:Router,private Http:HttpClient, public App:AppGuardService) { }
users:any;
ngOnInit(){
  
}

  log(user:{email_user:string,pwd_user:string}){
    let response=this.Http.get('http://localhost:8080/user/all');
    response.subscribe((data)=>{
      this.users=data;
      console.log(user)
      for(let usr of this.users){
        console.log('from db',usr.email_user)
        console.log('from key',user.email_user)
           if (user.email_user!=usr.email_user){
              alert("Wrong mail");
              console.log(usr.pwd_user+'////'+this.users.pwd_user)
        }else if (user.pwd_user!=usr.pwd_user){
          alert("Wrong pass");
          }else {
            this.App.setlogged(true);
            this.router.navigate(['/produit']);

          }
          

      }
    
    });
   
    

  }
 
}
