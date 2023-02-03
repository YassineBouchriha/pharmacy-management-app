import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})
export class AddFournisseurComponent {
  constructor(public dialog: MatDialog,public Http: HttpClient) {}
  closeDialog() {
    this.dialog.closeAll();
  }
  onlyNumberKey($event:any) {

    console.log($event)
    let value = (<HTMLInputElement>$event.target).value;

    if ($event.target) {
      if (value == "") {
        value = value.slice(0, 0);
      }

      if (value.length > 8) {
        value = value.slice(0, 8)
      }
      (<HTMLInputElement>$event.target).value = value.replace(/\D/g, '');
    }
  }
  add(four:{nom_fournisseur:string,adresse_fournisseur:string,tel_fournisseur:string,email_fournisseur:string}){
    console.log("licence",four)
    this.Http.post('http://localhost:8080/fournisseur/addfour/', four).subscribe((data) => {
      console.log(data);
      window.location.reload();
    });

    

  }

}
