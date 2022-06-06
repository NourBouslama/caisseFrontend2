import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facture } from '../Model/Facture';
import { AuthentifierService } from './connection.service';


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
    const url = `${this.apiURL}/refFacture/${id}`;
    return this.http.get<Facture[]>(url);
  }

  chercherFactureRefContrat(id: number): Observable<Facture[]> {
    const url = `${this.apiURL}/refContrat/${id}`;
    return this.http.get<Facture[]>(url);
  }


  chercherFactureRefclient(id: number): Observable<Facture[]> {
    const url = `${this.apiURL}/refClient/${id}`;
    return this.http.get<Facture[]>(url);
  }


  RecupererFactures(): Observable<Facture[]> {
    const url="http://localhost:8095/synch/factureDist/RecupererFactures";
    return this.http.get<Facture[]>(url);
}

ajouterFactures(factures: Facture[]) {
    
  return this.http.post(this.apiURL+"/ajouterFactures",factures);

}

modifierFactures(factures: Facture[]) {
    
   return this.http.put("http://localhost:8095/synch/factureDist/modifierFactures",factures);

}

listerFactures(): Observable<Facture[]> {
    

  return this.http.get<Facture[]>(this.apiURL + '/listerFactures');

}
}
