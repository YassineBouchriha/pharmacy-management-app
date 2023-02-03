import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {AddFactureComponent} from "../add-facture/add-facture.component";
import {FoundFactureComponent} from "../found-facture/found-facture.component";
import {AddFamilleComponent} from "../add-famille/add-famille.component";

@Component({
  selector: 'app-famille',
  templateUrl: './famille.component.html',
  styleUrls: ['./famille.component.css']
})
export class FamilleComponent {
  searchText:any;
  constructor(public Http: HttpClient,public dialog: MatDialog) {}
  fam:any;

  ngOnInit() {
    let response=this.Http.get('http://localhost:8080/famille/all');
    response.subscribe((data)=>this.fam=data);

  }
  openDialog() {
    this.dialog.open(AddFamilleComponent, {
      width: '40%',
      height: '32%',


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
    let response=this.Http.delete('http://localhost:8080/famille/deletefam/'+id);
    response.subscribe((data)=>this.fam=data);
    window.location.reload();


  }
  deleteall(){
    let response=this.Http.delete('http://localhost:8080/famille/deleteallfam');
    response.subscribe((data)=>this.fam=data);
    window.location.reload();



  }

}
