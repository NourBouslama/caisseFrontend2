import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facture } from '../Model/Facture';
import { Paiement } from '../Model/Paiement';
import { AuthentifierService } from './authentifier.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  apiURL: string = 'http://localhost:8080/caisses/paiement';
  constructor(private http: HttpClient, private authService: AuthentifierService) {
  }
  listerPaiements(numS: number): Observable<Paiement[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })

    return this.http.get<Paiement[]>(this.apiURL + '/listerPaiement/' + numS, { headers: httpHeaders });
  }

  ajouterPaiement(paiement: Paiement): Observable<Paiement> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })

    return this.http.post<Paiement>(this.apiURL + '/ajouterPaiement', paiement, { headers: httpHeaders });
  }

  PayerFacture(factures: Facture[]) {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })

    const url = `${this.apiURL}/payer`;
    return this.http.put(url, factures, { headers: httpHeaders });
  }
  AnnulerPaiement(factures: Facture[]): Observable<Paiement> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })

    const url = `${this.apiURL}/annuler`;
    return this.http.put<Paiement>(url, factures, { headers: httpHeaders });
  }

}
