import {Component, Inject} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-found-labo',
  templateUrl: './found-labo.component.html',
  styleUrls: ['./found-labo.component.css']
})
export class FoundLaboComponent {
  idif:any;

  constructor(
    private formBuilder: FormBuilder,
    private Http: HttpClient,
    private dialogRef: MatDialogRef<FoundLaboComponent>,
    @Inject(MAT_DIALOG_DATA) public datas: any
  ) {
    this.idif=datas.id;
  }
  labo:any;
 ngOnInit() {
   console.log(this.idif);
   let response=this.Http.get('http://localhost:8080/laboratoire/getlab/'+this.idif.toString());
   response.subscribe((data)=>this.labo=data);
 }
  printpage(){
    window.print();
  }
}
