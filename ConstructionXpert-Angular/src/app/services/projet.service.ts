import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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


  updateProjets(id:number, Projets: Projets):Observable<Object>{
    return this.http.put(`${this.apiUrl}edit/${id}`, Projets);
  }
  // Méthode pour supprimer un projet
  deleteProjets(id: number): Observable<void> { // Utilisez Observable<void> car la réponse est vide
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }


}
