import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthentifierService } from './connection.service';
import { Utilisateur } from '../Model/Utilisateur';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  apiURL: string = 'http://localhost:8080/caisses/utilisateur';

  constructor(private http: HttpClient, private authService : AuthentifierService) { }

  chercherParEmail(email: String): Observable<Utilisateur> {
    const url = `${this.apiURL}/chercherParEmail/${email}`;
  
    return this.http.get<Utilisateur>(url);


  }
  modifierUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
     
    return this.http.put<Utilisateur>(this.apiURL + '/modifierUtilisateur', utilisateur);

  }
}
