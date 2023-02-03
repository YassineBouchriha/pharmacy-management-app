import {Component, Inject} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-foundfournisseur',
  templateUrl: './foundfournisseur.component.html',
  styleUrls: ['./foundfournisseur.component.css']
})
export class FoundfournisseurComponent {
  idif:any;

  constructor(
    private formBuilder: FormBuilder,
    private Http: HttpClient,
    private dialogRef: MatDialogRef<FoundfournisseurComponent>,
    @Inject(MAT_DIALOG_DATA) public datas: any
  ) {
    this.idif=datas.id;
  }
  fournisseur:any;
  ngOnInit() {
    console.log(this.idif);
    let response=this.Http.get('http://localhost:8080/fournisseur/getfour/'+this.idif.toString());
    response.subscribe((data)=>this.fournisseur=data);


  }


  printpage(){
    window.print();

  }


}
