import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ressources} from "../../classes/Ressources/ressources";

@Injectable({
  providedIn: 'root'
})
export class RessourcesService {

  private url = 'http://localhost:8822/api/ressources/'

  constructor(private httpClient: HttpClient) { }

  addRessource(id:number, ressource: Ressources):Observable<Object>{
     return this.httpClient.post(this.url+`add/${id}`,ressource);
  }

  getRessourceByTacheId(id:number):Observable<Ressources[]>{
    return this.httpClient.get<Ressources[]>(`${this.url}${id}`)
  }

  getRessourceById(id:number):Observable<Ressources>{
    return this.httpClient.get<Ressources>(`${this.url}ressource/${id}`)
  }

  modifyRessource(id:number, ressources: Ressources):Observable<Object>{
    return this.httpClient.put(`${this.url}edit/${id}`, ressources);
  }
  deleteRessource(id:number):Observable<Ressources>{
    return this.httpClient.delete<Ressources>(`${this.url}delete/${id}`)
  }

}
