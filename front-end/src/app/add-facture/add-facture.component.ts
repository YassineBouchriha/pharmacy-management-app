import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-facture',
  templateUrl: './add-facture.component.html',
  styleUrls: ['./add-facture.component.css']
})
export class AddFactureComponent {
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
  id_four:any;
  id_fam:any;
  pick(e:any)
  {
    console.log(e.target.value)
    this.id_four=e.target.value

  }
  pickf(e:any)
  {
    console.log(e.target.value)
    this.id_fam=e.target.value
  }
  fourn:any;
  prody:any;

  add(four:{total_HT:number,totale_TVA:number,totale_TTC:number,forunisseur:any,date_facture:Date,produits:any})
  {
    console.log("licence",four)
    this.Http.get('http://localhost:8080/fournisseur/getfour/'+this.id_four).subscribe((data) => {
      this.fourn=data;
      console.log(this.fourn)
      four.forunisseur=this.fourn;
      console.log("licence",four)
      this.Http.get('http://localhost:8080/produit/getprod/'+this.id_fam).subscribe((data) => {
        this.prody=data;
        console.log(this.prody)
       four.produits=this.prody;
       console.log("tva",four)
     this.Http.post('http://localhost:8080/facture/addfact/',four).subscribe((data) => {
          console.log(data);



        });
      });
    });











  }
}
