import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Caisse } from '../Model/Caisse';
import { SessionCaisse } from '../Model/SessionCaisse';
import { AuthentifierService } from './connection.service';

/*const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};*/
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  apiURL: string = 'http://localhost:8080/caisses/session';
  constructor(private http: HttpClient, private authService : AuthentifierService) {
  }


  listeSession(): Observable<SessionCaisse[]> {

    return this.http.get<SessionCaisse[]>(this.apiURL+'/listerSessionCaisses');
  }

  listeSessionByCaissierId(id:number): Observable<SessionCaisse[]> {


    const url=`${this.apiURL+"/chercherParCaissierId"}/${id}`;
    return this.http.get<SessionCaisse[]>(url);
  }

  

  ajouterSession(session: SessionCaisse): Observable<SessionCaisse> {


    return this.http.post<SessionCaisse>(this.apiURL + '/creerSessionCaisse', session);
  }

  FermerSession(numS: number) {
  

    const url = `${this.apiURL+"/fermerSessionParNum"}/${numS}`;
    return this.http.put<SessionCaisse>(url,null);
  }

  fermerJournalCaisse(id: number) {


    const url = `${this.apiURL+"/fermerJournalCaisse"}/${id}`;
    return this.http.put(url,null);
  }

  OuvrirSession(id: number) {


    const url = `${this.apiURL+"/OuvrirSessionParNum"}/${id}`;
    return this.http.put(url,null);
  }

  consulterSession(numS: number): Observable<SessionCaisse> {


    const url = `${this.apiURL+"/consulterSessionCaisse"}/${numS}`;
    return this.http.get<SessionCaisse>(url);
  }

  chercherByCaisseNumC(etat:string,numC: number):Observable<SessionCaisse[]> {

    const url = `${this.apiURL+"/chercherParCaisseNumC"}/${etat}/${numC}`;
    return this.http.get<SessionCaisse[]>(url);
  
  }

  chercherByEtatEtCaissier(etat:string,id: number):Observable<SessionCaisse[]> {

    const url = `${this.apiURL+"/chercherParEtatETCaissier"}/${etat}/${id}`;
    return this.http.get<SessionCaisse[]>(url);
  
  }
  chercherByEtatEtCaissierId(etat:string,id: number):Observable<SessionCaisse> {
    
    const url = `${this.apiURL+"/chercherParCaissierEtEtat"}/${id}/${etat}`;
    return this.http.get<SessionCaisse>(url);
  
  }

  modifierSession(session: SessionCaisse) {


    const url = `${this.apiURL+"/modifierSessionCaisse"}`;

    return this.http.put(url, session);

  }
  ChercherSessionParEtatJournal(etat:string,id: number):any {
    const url = `${this.apiURL+"/ChercherSessionParEtatJournal"}/${etat}/${id}`;
    return this.http.get(url);

  }






}
