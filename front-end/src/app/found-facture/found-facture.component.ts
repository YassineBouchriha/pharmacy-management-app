import {Component, Inject} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-found-facture',
  templateUrl: './found-facture.component.html',
  styleUrls: ['./found-facture.component.css']
})
export class FoundFactureComponent {
  idif:any;

  constructor(
    private formBuilder: FormBuilder,
    private Http: HttpClient,
    private dialogRef: MatDialogRef<FoundFactureComponent>,
    @Inject(MAT_DIALOG_DATA) public datas: any
  ) {
    this.idif=datas.id;
  }
  fact:any;
  ngOnInit() {
    console.log(this.idif);
    let response=this.Http.get('http://localhost:8080/facture/getfact/'+this.idif.toString());
    response.subscribe((data)=>this.fact=data);
  }
  printpage(){
    window.print();
  }
}
