import { Component, OnInit } from '@angular/core';
import { Projets } from '../model/projet';
import { ProjetsService } from '../services/projet.service';

@Component({
  selector: 'app-projet-list',
  templateUrl: './list-projet.component.html',
  styleUrls: ['./list-projet.component.css']
})
export class ProjetsListComponent implements OnInit {
  projets: Projets[] = [];
  errorMessage: string = ''; // Ajout de la propriété errorMessage

  constructor(private projetsService: ProjetsService) {}

  ngOnInit(): void {
    this.loadProjets();
  }

  loadProjets(): void {
    this.projetsService.allProjets().subscribe(
      (data) => {
        this.projets = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des projets', error);
        this.errorMessage = 'Une erreur est survenue lors du chargement des projets.'; // Attribution d'un message d'erreur
      }
    );
  }
  deleteProjet(id: number | undefined): void {
    if (id === undefined) {
      this.errorMessage = 'ID du projet est indéfini.';
      return;
    }

    if (confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) {
      this.projetsService.deleteProjets(id).subscribe(
        () => {
          this.projets = this.projets.filter(projet => projet.id !== id);
        },
        (error) => {
          console.error('Erreur lors de la suppression du projet', error);
          this.errorMessage = 'Une erreur est survenue lors de la suppression du projet.'; // Attribution d'un message d'erreur
        }
      );
    }
  }

}