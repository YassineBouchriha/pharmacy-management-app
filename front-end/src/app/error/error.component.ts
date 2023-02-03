import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AppGuardService} from "../service/guard/app-guard.service";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  constructor(public router:Router,private Http:HttpClient, public App:AppGuardService)
  {}
  lo(){this.App.setlogged(false);}

}
