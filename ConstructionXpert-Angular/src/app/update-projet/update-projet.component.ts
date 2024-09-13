import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Projets } from '../model/projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {
  private apiUrl = 'http://localhost:8222/api/projets';  // Base URL du backend

  constructor(private http: HttpClient) { }

  // Méthode pour ajouter un nouveau projet
  ajouterProjet(projet: Projets): Observable<Projets> {
    return this.http.post<Projets>(`${this.apiUrl}/add`, projet).pipe(
      catchError(this.handleError) // Gestion des erreurs
    );
  }

  // Méthode pour récupérer tous les projets
  allProjets(): Observable<Projets[]> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<Projets[]>(`${this.apiUrl}/all`, { headers }).pipe(
      catchError(this.handleError) // Gestion des erreurs
    );
  }

  // Méthode pour récupérer un projet par son ID
  getProjetById(id: number): Observable<Projets> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<Projets>(`${this.apiUrl}/${id}`, { headers }).pipe(
      catchError(this.handleError) // Gestion des erreurs
    );
  }

  // Méthode pour modifier un projet
  modifierProjet(id: number, projet: Projets): Observable<Projets> {
    const headers = this.createAuthorizationHeader();
    return this.http.put<Projets>(`${this.apiUrl}/${id}`, projet, { headers }).pipe(
      catchError(this.handleError) // Gestion des erreurs
    );
  }

  // Création des headers pour l'autorisation
  private createAuthorizationHeader(): HttpHeaders | undefined {
    const jwtToken = localStorage.getItem('jwt');
    if (jwtToken) {
      console.log("JWT token found in local storage", jwtToken);
      return new HttpHeaders().set("Authorization", "Bearer " + jwtToken);
    } else {
      console.log("JWT token not found in local storage");
      return undefined;
    }
  }

  // Gestion des erreurs
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error.message);
    return throwError(error.message || 'Erreur serveur');
  }
}
