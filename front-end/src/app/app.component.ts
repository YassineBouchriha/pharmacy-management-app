import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FournisseurComponent} from "./fournisseur/fournisseur.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  sideBarOpen = false;
  constructor(public _router:Router) {}

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
