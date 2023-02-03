import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppGuardService } from '../service/guard/app-guard.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent {
  constructor(public router:Router,public App:AppGuardService){

  }
  logOut(){
    this.App.setlogged(false);




  }
}
