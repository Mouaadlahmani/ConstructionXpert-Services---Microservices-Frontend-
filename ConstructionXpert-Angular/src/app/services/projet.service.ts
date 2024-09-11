// src/app/services/projets.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projets } from '../model/projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {
  private apiUrl = 'http://localhost:8222/api/projets/add';  // URL du backend

  constructor(private http: HttpClient) { }

  ajouterProjet(projet: Projets): Observable<Projets> {
    return this.http.post<Projets>(this.apiUrl, projet);
  }

  // Méthode pour récupérer tous les projets
  getProjets(): Observable<Projets[]> {
    return this.http.get<Projets[]>(this.apiUrl);
  }

}
