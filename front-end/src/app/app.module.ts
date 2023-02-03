import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule} from "@angular/material/list";
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTreeModule} from '@angular/material/tree';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRippleModule} from '@angular/material/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LaboComponent } from './labo/labo.component';
import { FactComponent } from './fact/fact.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ProduitComponent } from './produit/produit.component';
import { SideComponent } from './side/side.component';
import { HeaderComponent } from './header/header.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { AddFactureComponent } from './add-facture/add-facture.component';
import { AddLaboComponent } from './add-labo/add-labo.component';
import { DataTablesModule } from 'angular-datatables';
import { EditfournisseurComponent } from './editfournisseur/editfournisseur.component';
import { TabComponent } from './tab/tab.component';
import { FoundfournisseurComponent } from './foundfournisseur/foundfournisseur.component';
import { FoundProduitComponent } from './found-produit/found-produit.component';
import { FoundLaboComponent } from './found-labo/found-labo.component';
import { FoundFactureComponent } from './found-facture/found-facture.component';
import { SearchPipe } from './search.pipe';
import { FamilleComponent } from './famille/famille.component';
import { AddFamilleComponent } from './add-famille/add-famille.component';
import { LoginComponent } from './login/login.component';
import { DshComponent } from './dsh/dsh.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    LaboComponent,
    FactComponent,
    FournisseurComponent,
    ProduitComponent,
    SideComponent,
    HeaderComponent,
    AddProductComponent,
    AddFournisseurComponent,
    AddLaboComponent,
    AddFactureComponent,
    EditfournisseurComponent,
    TabComponent,
    FoundfournisseurComponent,
    FoundProduitComponent,
    FoundLaboComponent,
    FoundFactureComponent,
    SearchPipe,
    FamilleComponent,
    AddFamilleComponent,
    LoginComponent,
    DshComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    , MatListModule
    , MatCardModule
    , MatGridListModule
    , MatIconModule
    , MatButtonModule
    , MatToolbarModule
    , MatSidenavModule
    , MatDividerModule
    , MatMenuModule
    , MatFormFieldModule
    , MatInputModule
    , MatSelectModule
    , MatTableModule
    , MatPaginatorModule
    , MatSortModule
    , MatDialogModule
    , MatSnackBarModule
    , MatProgressBarModule
    , MatProgressSpinnerModule
    , MatCheckboxModule
    , MatDatepickerModule
    , MatNativeDateModule
    , MatRadioModule
    , MatTooltipModule
    , MatExpansionModule
    , MatTabsModule
    , MatStepperModule
    , MatAutocompleteModule
    , MatChipsModule
    , MatSliderModule
    , MatSlideToggleModule
    , MatTreeModule
    , MatBadgeModule
    , MatBottomSheetModule
    , MatButtonToggleModule
    , MatRippleModule
    , HttpClientModule
    , DataTablesModule, FormsModule
    , ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
