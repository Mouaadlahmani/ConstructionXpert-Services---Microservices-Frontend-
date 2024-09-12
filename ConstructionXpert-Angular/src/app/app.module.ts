import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';  // Importez RouterModule

import { AppComponent } from './app.component';
import { ProjetComponent } from './projet/projet.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjetsListComponent } from './list-projet/list-projet.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetComponent,
    ProjetsListComponent
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

