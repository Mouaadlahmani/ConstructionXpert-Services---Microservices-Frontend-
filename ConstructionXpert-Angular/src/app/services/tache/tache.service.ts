import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tache} from "../../classes/Tache/tache";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  private url = 'http://localhost:8822/api/taches/'

  constructor(private httpClient: HttpClient) { }

  addTache(id:number, tache:Tache):Observable<Object>{
    return this.httpClient.post(`${this.url}add/${id}`, tache);
  }

  getTacheById(id:number):Observable<Tache>{
    return this.httpClient.get<Tache>(`${this.url}tache/${id}`)
  }

  getTacheByProjet(id:number):Observable<Tache[]>{
    return this.httpClient.get<Tache[]>(`${this.url}projet/${id}`);
  }

  editTache(id:number, tache:Tache):Observable<Object>{
    return this.httpClient.put(`${this.url}edit/${id}`, tache);
  }

  deleteTache(id:number):Observable<Tache>{
    return this.httpClient.delete<Tache>(`${this.url}delete/${id}`)
  }

}
