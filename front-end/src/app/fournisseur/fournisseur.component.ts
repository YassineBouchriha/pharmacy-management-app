import {Component, EventEmitter, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import{AddFournisseurComponent} from "../add-fournisseur/add-fournisseur.component";
import { EditfournisseurComponent } from '../editfournisseur/editfournisseur.component';
import {FoundfournisseurComponent} from "../foundfournisseur/foundfournisseur.component";
@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent {
  searchText="";
  fournisseurs:any;
  constructor(public Http: HttpClient,public dialog: MatDialog) {}



  str='http://localhost:8080/fournisseur';
  ngOnInit() {
  let response=this.Http.get(this.str+'/all');
  response.subscribe((data)=>this.fournisseurs=data);
  }
  openDialog() {
    this.dialog.open(AddFournisseurComponent, {
      width: '40%',
      height: '70%',


    });
  }
  openeditDialog(id:any) {
    this.dialog.open(EditfournisseurComponent, {
      width: '40%',
      height: '70%',
      data: {id: id},


    });
  }
  delete(id:any){
    let response=this.Http.delete('http://localhost:8080/fournisseur/deletefour/'+id);
    response.subscribe((data)=>this.fournisseurs=data);
    window.location.reload();


  }
  rechtext:string="";
  @Output()
  rechtextchanged:EventEmitter<string> = new EventEmitter<string>();
  rech(){
    this.rechtextchanged.emit(this.rechtext);
    console.log(this.rechtext);
    this.dialog.open(FoundfournisseurComponent, {
      width: '40%',
      height: '70%',
      data: {id: this.rechtext},


    });



  }
  printy(id:any){
    this.dialog.open(FoundfournisseurComponent, {
      width: '40%',
      height: '70%',
      data: {id: id},

    });



  }


  deleteall(){
    let response=this.Http.delete('http://localhost:8080/fournisseur/deleteallfour/');
    response.subscribe((data)=>this.fournisseurs=data);
    window.location.reload();



  }

}
