import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
declare const $: any;
@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit, AfterViewInit {

   str='http://localhost:8080/fournisseur';
 fournisseurss: any;
  ngAfterViewInit(): void {
    $('#example').DataTable();
  }

  constructor(public Http:HttpClient) { }

  ngOnInit(): void {
    let response=this.Http.get(this.str+'/all');
    response.subscribe((data)=>this.fournisseurss=data);

  }

}


