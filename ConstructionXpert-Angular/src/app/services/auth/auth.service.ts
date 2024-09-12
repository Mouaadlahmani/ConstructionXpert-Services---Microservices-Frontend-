import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Jwt} from "../../classes/Jwt/jwt";
import {Utilisateur} from "../../classes/Utilisateur/utilisateur";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:8822/api/auth/'

  constructor(private httpClient: HttpClient) { }

  login(loginRequest: any): Observable<Jwt>{
    return this.httpClient.post<Jwt>(`${this.url}authenticate`, loginRequest)
  };

  register(utilisateur: Utilisateur):Observable<Object>{
      return this.httpClient.post(this.url+'register', utilisateur)
  }

  validateToken(token: string): Observable<string> {
    return this.httpClient.get<string>(this.url + 'validate?token=' + token);
  }

  logout():void{
    localStorage.removeItem('token')
  }
}
