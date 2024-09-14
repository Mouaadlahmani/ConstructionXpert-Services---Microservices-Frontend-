// src/app/projet/projet.component.ts
import { Component } from '@angular/core';
import { Projets } from '../model/projet';
import { ProjetsService } from '../services/projet/projet.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css'] // Changez cette ligne pour CSS
})
export class ProjetComponent {
  nouveauProjet: Projets = {
    nom: '',
    description: '',
    dateDebut: new Date(),
    dateFin: new Date(),
    budget: 0
  };

  constructor(private projetsService: ProjetsService) {}

  ajouterProjet() {
    this.projetsService.ajouterProjet(this.nouveauProjet).subscribe(
      response => {
        console.log('Projet ajouté avec succès', response);
      },
      error => {
        console.error('Erreur lors de l\'ajout du projet', error);
      }
    );
  }
}
