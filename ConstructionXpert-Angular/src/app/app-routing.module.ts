import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/auth/login/login.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {AddRessourcesComponent} from "./components/Ressources/add-ressources/add-ressources.component";
import {EditRessourcesComponent} from "./components/Ressources/edit-ressources/edit-ressources.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'add-ressource',component:AddRessourcesComponent},
  {path:'edit/:id', component:EditRessourcesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
