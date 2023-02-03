import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-famille',
  templateUrl: './add-famille.component.html',
  styleUrls: ['./add-famille.component.css']
})
export class AddFamilleComponent {
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
  add(four:{lib_famille:string}){
    console.log("licence",four)
    this.Http.post('http://localhost:8080/famille/addfam', four).subscribe((data) => {
      console.log(data);
      window.location.reload();
    });



  }

}
