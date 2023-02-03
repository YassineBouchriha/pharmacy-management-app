import { Component } from '@angular/core';


import {AddProductComponent} from "../add-product/add-product.component";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import { RowContext } from '@angular/cdk/table';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})

export class ProduitComponent {

  searchText:any;
  title = 'Produit';
  sideBarOpen = true;


  products:any;

  selectedrow:any;
  constructor(public Http: HttpClient,public dialog: MatDialog) {}
  str='http://localhost:8080/produit';
  onRowClicked(row:any){
    this.selectedrow=row;
  }
  ngOnInit() {

  let response=this.Http.get(this.str+'/all');
  response.subscribe((data)=>this.products=data);
  }

  openDialog() {
    this.dialog.open(AddProductComponent, {
      width: '40%',
      height: '70%',


    });
  }
  delete(product:any){
    let response=this.Http.delete(this.str+'/deleteprod/'+product.id_produit);
    response.subscribe((data)=>this.products=data);
    window.location.reload();

  }
  deleteall(){
    let response=this.Http.delete('http://localhost:8080/produit/deleteallprod/');
    response.subscribe((data)=>this.products=data);
    window.location.reload();



  }


}
