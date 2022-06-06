import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Encaissement } from '../Model/Encaissement';
import { AuthentifierService } from './connection.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EncaissementService {

  apiURL: string = 'http://localhost:8080/caisses/encaissement';
  constructor(private http: HttpClient, private authService : AuthentifierService) {
  }

  listeEncaissements(): Observable<Encaissement[]> {
    

    return this.http.get<Encaissement[]>(this.apiURL + '/listerEncaissements');
  }

  listeEncaissementsByEtatETSession(name,nums): Observable<any> {
    

    const url = `${this.apiURL+"/listerEncaissementsParEtatETSession"}/${name}/${nums}`;
    return this.http.get<Encaissement[]>(url);
  }
  
  listeEncaissementsBySession(session : number): Observable<any> {
    

    const url = `${this.apiURL+"/listerEncaissementsParSession"}/${session}`;
    return this.http.get<Encaissement[]>(url);
  }

  listerEncaissementParEtatEtPaiementMode(etat:string,mode:string):Observable<Encaissement[]> {
    

    const url = `${this.apiURL+"/listerParEtatEtPaiementMode"}/${etat}/${mode}`;
    return this.http.get<Encaissement[]>(url);
  }

  listerEncaissementParNumSEtatEtPaiementMode(nums:number,etat:string,mode:string):Observable<Encaissement[]> {
    

    const url = `${this.apiURL+"/listerParNumSEtEtatEtPaiementMode"}/${nums}/${etat}/${mode}`;
    return this.http.get<Encaissement[]>(url);
  }

  ajouterEncaissement( encaissement: Encaissement):Observable<Encaissement>{
    

    return this.http.post<Encaissement>(this.apiURL+'/ajouterEncaissement', encaissement);
    }

  
    modifierEncaissements(encaissements: Encaissement[]) {
    
      return this.http.put("http://localhost:8095/synch/encaissement/modifierEncaissements",encaissements);
   
   }
}
