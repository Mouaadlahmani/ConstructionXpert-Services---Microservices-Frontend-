import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetComponent } from './projet/projet.component';
import { ProjetsListComponent } from './list-projet/list-projet.component';
import {LoginComponent} from "./components/auth/login/login.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {AddRessourcesComponent} from "./components/Ressources/add-ressources/add-ressources.component";
import {EditRessourcesComponent} from "./components/Ressources/edit-ressources/edit-ressources.component";
import {DisplayRessourcesComponent} from "./components/Ressources/display-ressources/display-ressources.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'prefix' },
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  { path: 'create-projet', component: ProjetComponent },   // Chemin vers le composant de création de projet
  { path: 'all-projets', component: ProjetsListComponent }, // Chemin vers le composant de la liste des projets
  { path: 'projets/edit/:id', component: ProjetComponent }, // Chemin pour l'édition
  { path: 'add-ressource/:id', component:AddRessourcesComponent },
  { path: 'edit-ressource/:id', component:EditRessourcesComponent },
  { path: 'ressources/:id', component:DisplayRessourcesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
