import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetComponent } from './projet/projet.component';
import { ProjetsListComponent } from './list-projet/list-projet.component';
import {LoginComponent} from "./components/auth/login/login.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {AddRessourcesComponent} from "./components/Ressources/add-ressources/add-ressources.component";
import {EditRessourcesComponent} from "./components/Ressources/edit-ressources/edit-ressources.component";
import {DisplayRessourcesComponent} from "./components/Ressources/display-ressources/display-ressources.component";
import {DispalyTachesComponent} from "./components/Taches/dispaly-taches/dispaly-taches.component";
import {AddTacheComponent} from "./components/Taches/add-tache/add-tache.component";
import {RessourcesComponent} from "./components/Ressources/ressources/ressources.component";
import {TacheComponent} from "./components/Taches/tache/tache.component";
import {EditTacheComponent} from "./components/Taches/edit-tache/edit-tache.component";
import {authGuardGuard} from "./Guards/auth-guard.guard";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'prefix' },
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'ressource',
    component:RessourcesComponent,
    children:[
      { path: 'add/:id', component:AddRessourcesComponent },
      { path: 'edit/:id', component:EditRessourcesComponent },
      { path: ':id', component:DisplayRessourcesComponent },
    ]
  },
  {path:'taches',
  component:TacheComponent,
  children:[
    { path: ':id', component:DispalyTachesComponent },
    { path: 'add/:id', component:AddTacheComponent },
    { path: 'edit/:id', component:EditTacheComponent },
  ]
  },
  { path: 'create-projet', component: ProjetComponent },   // Chemin vers le composant de création de projet
  { path: 'all-projets', component: ProjetsListComponent , canActivate:[authGuardGuard]}, // Chemin vers le composant de la liste des projets
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
