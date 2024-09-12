import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetComponent } from './projet/projet.component';
import { ProjetsListComponent } from './list-projet/list-projet.component';

const routes: Routes = [
  { path: 'create-projet', component: ProjetComponent },   // Chemin vers le composant de création de projet
  { path: 'all-projets', component: ProjetsListComponent }, // Chemin vers le composant de la liste des projets
  { path: '', redirectTo: '/create-projet', pathMatch: 'prefix' }, // Modifiez pathMatch à 'prefix'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }