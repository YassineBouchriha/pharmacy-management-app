import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import { AddLaboComponent } from '../add-labo/add-labo.component';
import {FoundfournisseurComponent} from "../foundfournisseur/foundfournisseur.component";
import {FoundLaboComponent} from "../found-labo/found-labo.component";
@Component({
  selector: 'app-labo',
  templateUrl: './labo.component.html',
  styleUrls: ['./labo.component.css']
})
export class LaboComponent {

  title = 'front';
  sideBarOpen = true;
  searchText="";
labos:any;


  constructor(public Http: HttpClient,public dialog: MatDialog) {}
  str='http://localhost:8080/laboratoire';
  ngOnInit() {
  let response=this.Http.get(this.str+'/all');
  response.subscribe((data)=>this.labos=data);
  }
  printy(id:any){
    this.dialog.open(FoundLaboComponent, {
      width: '40%',
      height: '70%',
      data: {id: id},

    });
  }


  openDialog() {
    this.dialog.open(AddLaboComponent, {
      width: '40%',
      height: '70%',


    });
  }
  delete(id:any){
    let response=this.Http.delete(this.str+'/deletelab/'+id);
    response.subscribe((data)=>this.labos=data);
    window.location.reload();

  }
  deleteall(){
    let response=this.Http.delete(this.str+'/deletealllab/');

    response.subscribe((data)=>this.labos=data);
    window.location.reload();




  }

}
