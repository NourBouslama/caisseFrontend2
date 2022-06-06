import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../Model/Utilisateur';
import { AuthentifierService } from './authentifier.service';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  apiURL: string = 'http://localhost:8080/caisses/utilisateur';

  constructor(private http: HttpClient, private authService : AuthentifierService) { }

  chercherParEmail(email: String): Observable<Utilisateur> {
    const url = `${this.apiURL}/chercherParEmail/${email}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.get<Utilisateur>(url,{headers:httpHeaders});


  }
}
