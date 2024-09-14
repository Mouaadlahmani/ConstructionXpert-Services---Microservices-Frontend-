import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';  // Importez RouterModule

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { RessourcesComponent } from './components/Ressources/ressources/ressources.component';
import { AddRessourcesComponent } from './components/Ressources/add-ressources/add-ressources.component';
import { EditRessourcesComponent } from './components/Ressources/edit-ressources/edit-ressources.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { AppRoutingModule } from './app-routing.module';
import {ProjetComponent} from "./projet/projet.component";
import {ProjetsListComponent} from "./list-projet/list-projet.component";
import {AuthInterceptor} from "./Interceptor/auth.interceptor";
import { DisplayRessourcesComponent } from './components/Ressources/display-ressources/display-ressources.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { TacheComponent } from './components/Taches/tache/tache.component';
import { AddTacheComponent } from './components/Taches/add-tache/add-tache.component';
import { DispalyTachesComponent } from './components/Taches/dispaly-taches/dispaly-taches.component';
import { EditTacheComponent } from './components/Taches/edit-tache/edit-tache.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RessourcesComponent,
    AddRessourcesComponent,
    EditRessourcesComponent,
    ProjetComponent,
    ProjetsListComponent,
    DisplayRessourcesComponent,
    TacheComponent,
    AddTacheComponent,
    DispalyTachesComponent,
    EditTacheComponent
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
    MatCheckboxModule,
    MatToolbarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

