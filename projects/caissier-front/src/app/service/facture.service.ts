import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facture } from '../Model/Facture';
import { AuthentifierService } from './authentifier.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  apiURL: string = 'http://localhost:8080/caisses/facture';
  constructor(private http: HttpClient, private authService: AuthentifierService) {
  }
  chercherFactureRefFacture(id: number): Observable<Facture[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })

    const url = `${this.apiURL}/refFacture/${id}`;
    return this.http.get<Facture[]>(url, { headers: httpHeaders });
  }
  chercherFactureRefContrat(id: number): Observable<Facture[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })

    const url = `${this.apiURL}/refContrat/${id}`;
    return this.http.get<Facture[]>(url, { headers: httpHeaders });
  }
  chercherFactureRefclient(id: number): Observable<Facture[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })

    const url = `${this.apiURL}/refClient/${id}`;
    return this.http.get<Facture[]>(url, { headers: httpHeaders });
  }
}
