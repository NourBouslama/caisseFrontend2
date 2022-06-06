import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Encaissement } from '../Model/Encaissement';
import { AuthentifierService } from './authentifier.service';

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
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})

    return this.http.get<Encaissement[]>(this.apiURL + '/listerEncaissements',{headers:httpHeaders});
  }

  listeEncaissementsByEtatETSession(name,nums): Observable<any> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})

    const url = `${this.apiURL+"/listerEncaissementsParEtatETSession"}/${name}/${nums}`;
    return this.http.get<Encaissement[]>(url,{headers:httpHeaders});
  }
  
  listeEncaissementsBySession(session : number): Observable<any> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})

    const url = `${this.apiURL+"/listerEncaissementsParSession"}/${session}`;
    return this.http.get<Encaissement[]>(url,{headers:httpHeaders});
  }

  listerEncaissementParEtatEtPaiementMode(etat:string,mode:string):Observable<Encaissement[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})

    const url = `${this.apiURL+"/listerParEtatEtPaiementMode"}/${etat}/${mode}`;
    return this.http.get<Encaissement[]>(url,{headers:httpHeaders});
  }

  listerEncaissementParNumSEtatEtPaiementMode(nums:number,etat:string,mode:string):Observable<Encaissement[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})

    const url = `${this.apiURL+"/listerParNumSEtEtatEtPaiementMode"}/${nums}/${etat}/${mode}`;
    return this.http.get<Encaissement[]>(url,{headers:httpHeaders});
  }

  ajouterEncaissement( encaissement: Encaissement):Observable<Encaissement>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})

    return this.http.post<Encaissement>(this.apiURL+'/ajouterEncaissement', encaissement,{headers:httpHeaders});
    }
}
