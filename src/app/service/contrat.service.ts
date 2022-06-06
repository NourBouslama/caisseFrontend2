import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contrat } from '../Model/Contrat';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  constructor(private http : HttpClient) { }

  apiURL: string = 'http://localhost:8080/caisses/contrat';

  Recuperercontrats(): Observable<Contrat[]> {
    const url="http://localhost:8095/synch/contrat/RecupererContrats";
    return this.http.get<Contrat[]>(url);
}

ajoutercontrats(contrats: Contrat[]) {
    
  return this.http.post(this.apiURL+"/ajouterContrats",contrats);

}
}
