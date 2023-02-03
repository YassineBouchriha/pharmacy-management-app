import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import{AddFactureComponent} from "../add-facture/add-facture.component";
import {FoundLaboComponent} from "../found-labo/found-labo.component";
import {FoundFactureComponent} from "../found-facture/found-facture.component";
@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css']
})
export class FactComponent {
  searchText:any;
  constructor(public Http: HttpClient,public dialog: MatDialog) {}
  factures:any;

  ngOnInit() {
    let response=this.Http.get('http://localhost:8080/facture/all');
    response.subscribe((data)=>this.factures=data);

    }
  openDialog() {
    this.dialog.open(AddFactureComponent, {
      width: '40%',
      height: '70%',


    });
  }



  printy(id:any){
    this.dialog.open(FoundFactureComponent, {
      width: '40%',
      height: '88%',
      data: {id: id},

    });
  }
  delete(id:any){
    let response=this.Http.delete('http://localhost:8080/facture/deletefact/'+id);
    response.subscribe((data)=>this.factures=data);
    window.location.reload();


  }
  deleteall(){
    let response=this.Http.delete('http://localhost:8080/facture/deleteallfact/');
    response.subscribe((data)=>this.factures=data);
    window.location.reload();



  }

}
