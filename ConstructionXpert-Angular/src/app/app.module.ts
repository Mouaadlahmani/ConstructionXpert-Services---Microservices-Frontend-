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
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ProjetComponent} from "./projet/projet.component";
import {ProjetsListComponent} from "./list-projet/list-projet.component";
import {AuthInterceptor} from "./Interceptor/auth.interceptor";
import { DisplayRessourcesComponent } from './components/Ressources/display-ressources/display-ressources.component';
import {MatToolbarModule} from "@angular/material/toolbar";
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
    DashboardComponent,
    DisplayRessourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
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

