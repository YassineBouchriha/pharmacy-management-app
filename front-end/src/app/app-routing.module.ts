import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactComponent } from './fact/fact.component';
import { ProduitComponent } from './produit/produit.component';
import { LaboComponent } from './labo/labo.component';
import {FournisseurComponent} from "./fournisseur/fournisseur.component";
import {AddProductComponent} from "./add-product/add-product.component";
import{TabComponent} from "./tab/tab.component";
import{FamilleComponent} from "./famille/famille.component";
import {LoginComponent} from "./login/login.component";
import { AppGuardService } from './service/guard/app-guard.service';
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},

  {path:'produit',component:ProduitComponent,canActivate :[AppGuardService]},
  {path:'facture',component:FactComponent,canActivate :[AppGuardService]},
  {path:'labo',component:LaboComponent,canActivate :[AppGuardService]},
  {path:'fournis',component:FournisseurComponent,canActivate :[AppGuardService]},
  {path:'Addproduct',component:AddProductComponent,canActivate :[AppGuardService]},
  {path:'tab',component:TabComponent,canActivate :[AppGuardService]},
  {path:'fam',component:FamilleComponent,canActivate :[AppGuardService]},
  {path:'login',component:LoginComponent},
  {path:'404',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
