import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { laboratoire } from '../entitys/laboratoire';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']

})
export class AddProductComponent {
  constructor(public dialog: MatDialog,public Http: HttpClient) {}
  closeDialog() {
    this.dialog.closeAll();
  }
  str='http://localhost:8080/';
  labos:any;
  fams:any;
  laboratoire:any;

  ngOnInit() {

  let response=this.Http.get(this.str+'laboratoire/all');
  response.subscribe((data)=>this.labos=data);
  let response2=this.Http.get(this.str+'famille/all');
  response2.subscribe((data)=>this.fams=data);
  }
 id_labo:any;
  id_fam:any;
  pick(e:any)
  {
    console.log(e.target.value)
    this.id_labo=e.target.value

  }
  pickf(e:any)
  {
    console.log(e.target.value)
    this.id_fam=e.target.value

  }


labb:any;
  famm:any;

  add(four:{lib_produit:string,description_produit:string,prix_liv:number,prix_produit:number,date_ajoute:Date,famille:any,laboratoire:any})
  {
    this.Http.get('http://localhost:8080/laboratoire/getlab/'+this.id_labo).subscribe((data) => {
      this.labb=data;
      console.log(this.labb)
      four.laboratoire=this.labb;
      console.log("licence",four)
        this.Http.get('http://localhost:8080/famille/getfam/'+this.id_fam).subscribe((data) => {
            this.famm=data;
            console.log(this.famm)
            four.famille=this.famm;
            console.log("licence",four)
            this.Http.post('http://localhost:8080/produit/addprod/', four).subscribe((data) => {
              console.log(data);
              window.location.reload();

            });
        });
    });
    console.log("licence",this.labb)









  }

  /*
    add(formvalue:any){

    let produitp=new produit(null,formvalue.lib_produit,formvalue.prix_produit,formvalue.description_produit,formvalue.date_ajoute,formvalue.prix_liv,null,null);

    this.Http.post('http://localhost:8080/produit/addprod/', produitp).subscribe((data:any) => {
      console.log("licence",produitp)
      this.Http.patch<void>(`http://localhost:8080/produit/updatelabprod/${data.id_produit}/${this.id_labo}`,produit).subscribe((data) => {



       });
    });







  }
  */
}
