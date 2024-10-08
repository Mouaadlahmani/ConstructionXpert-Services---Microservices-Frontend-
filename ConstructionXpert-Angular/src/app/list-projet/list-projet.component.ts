import { Component, OnInit } from '@angular/core';
import { Projets } from '../model/projet';
import { ProjetsService } from '../services/projet/projet.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-projet-list',
  templateUrl: './list-projet.component.html',
  styleUrls: ['./list-projet.component.css']
})
export class ProjetsListComponent implements OnInit {
  projets: Projets[] = [];
  errorMessage: string = ''; // Ajout de la propriété errorMessage

  constructor(private projetsService: ProjetsService,
              private router:Router) {}

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

  toTaches(id:number | undefined){
    this.router.navigate(['taches', id])
  }

  addTache(id:number | undefined){
    this.router.navigate(['taches/add', id])
  }


}

