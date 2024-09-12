import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';  // Importez RouterModule

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { RessourcesComponent } from './components/Ressources/ressources/ressources.component';
import { AddRessourcesComponent } from './components/Ressources/add-ressources/add-ressources.component';
import { EditRessourcesComponent } from './components/Ressources/edit-ressources/edit-ressources.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { ProjetComponent } from './projet/projet.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjetsListComponent } from './list-projet/list-projet.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RessourcesComponent,
    AddRessourcesComponent,
    EditRessourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule
    ProjetComponent,
    ProjetsListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

