import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Projets } from '../model/projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {
  private apiUrl = 'http://localhost:8822/api/projets';  // Base URL du backend

  constructor(private http: HttpClient) { }

  // Méthode pour ajouter un nouveau projet
  ajouterProjet(projet: Projets): Observable<Projets> {
    return this.http.post<Projets>(`${this.apiUrl}/add`, projet);
  }

  // Méthode pour récupérer tous les projets
  allProjets(): Observable<Projets[]> {
    return this.http.get<Projets[]>(`${this.apiUrl}/all`);
  }

}
