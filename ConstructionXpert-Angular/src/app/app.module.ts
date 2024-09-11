// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';  // Importez RouterModule

import { AppComponent } from './app.component';
import { ProjetComponent } from './projet/projet.component';
import { AppRoutingModule } from './app-routing.module';  // Importez AppRoutingModule

@NgModule({
  declarations: [
    AppComponent,
    ProjetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule  // Ajoutez AppRoutingModule ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
