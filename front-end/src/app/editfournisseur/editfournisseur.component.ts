import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { NgForm,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editfournisseur',
  templateUrl: './editfournisseur.component.html',
  styleUrls: ['./editfournisseur.component.css']
})
export class EditfournisseurComponent {
  idif:any;

  

  
  constructor(
    private formBuilder: FormBuilder,
    private Http: HttpClient,
    private dialogRef: MatDialogRef<EditfournisseurComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
   this.idif=data.id;
  }
    FormValue !: FormGroup;

    fournisseur:any;
  str='http://localhost:8080/fournisseur';
  ngOnInit() {
    let response=this.Http.get(this.str+'/getfour/'+this.idif.toString());
    response.subscribe((data)=>this.fournisseur=data);
    this.FormValue.controls['nom_fournisseur'].setValue(this.fournisseur.nom_fournisseur);
    this.FormValue.controls['adresse_fournisseur'].setValue(this.fournisseur.adresse_fournisseur);
    this.FormValue.controls['tel_fournisseur'].setValue(this.fournisseur.tel_fournisseur);
    this.FormValue.controls['email_fournisseur'].setValue(this.fournisseur.email_fournisseur);
    
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
  update(four:{nom_fournisseur:string,adresse_fournisseur:string,tel_fournisseur:string,email_fournisseur:string}){
    console.log("licence",four)
    this.Http.put('http://localhost:8080/fournisseur/updatefour/', four).subscribe((data) => {
      console.log(data);
      window.location.reload();
    });

    

  }

}
