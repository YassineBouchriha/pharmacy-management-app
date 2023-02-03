import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-labo',
  templateUrl: './add-labo.component.html',
  styleUrls: ['./add-labo.component.css']
})
export class AddLaboComponent {
  constructor(public dialog: MatDialog,public Http: HttpClient) {}
  closeDialog() {
    this.dialog.closeAll();
  }
  str='http://localhost:8080/';
  fournisseurs:any;
  prods:any;
  
  ngOnInit() {
    
  let response=this.Http.get(this.str+'fournisseur/all');
  response.subscribe((data)=>this.fournisseurs=data);
  let response2=this.Http.get(this.str+'produit/all');
  response2.subscribe((data)=>this.prods=data);
  }
  add(four:{lib_laboratoire:string,adrs_laboratoire:string,tel_laboratoire:string,email_laboratoire:string}){
    console.log("licence",four)
    this.Http.post('http://localhost:8080/laboratoire/addlab/', four).subscribe((data) => {
      console.log(data);
      window.location.reload();
    });

    

  }

}
