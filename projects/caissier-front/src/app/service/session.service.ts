import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Caisse } from '../Model/Caisse';
import { SessionCaisse } from '../Model/SessionCaisse';
import { AuthentifierService } from './authentifier.service';

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
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<SessionCaisse[]>(this.apiURL+'/listerSessionCaisses',{headers:httpHeaders});
  }

  listeSessionByCaissierId(id:number): Observable<SessionCaisse[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})

    const url=`${this.apiURL+"/chercherParCaissierId"}/${id}`;
    return this.http.get<SessionCaisse[]>(url,{headers:httpHeaders});
  }

  

  ajouterSession(session: SessionCaisse): Observable<SessionCaisse> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})

    return this.http.post<SessionCaisse>(this.apiURL + '/creerSessionCaisse', session, {headers:httpHeaders});
  }

  FermerSession(numS: number) {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization':jwt
      }),
     withCredentials: true
    };
    //let httpHeaders = new HttpHeaders({"Authorization":jwt})

    const url = `${this.apiURL+"/fermerSessionParNum"}/${numS}`;
    return this.http.put<SessionCaisse>(url,httpOptions);
  }

  fermerJournalCaisse(id: number) {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})

    const url = `${this.apiURL+"/fermerJournalCaisse"}/${id}`;
    return this.http.put(url, {headers:httpHeaders});
  }

  OuvrirSession(id: number) {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})

    const url = `${this.apiURL+"/OuvrirSessionParNum"}/${id}`;
    return this.http.put(url, {headers:httpHeaders});
  }

  consulterSession(numS: number): Observable<SessionCaisse> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})

    const url = `${this.apiURL+"/consulterSessionCaisse"}/${numS}`;
    return this.http.get<SessionCaisse>(url, {headers:httpHeaders});
  }

  chercherByCaisseNumC(etat:string,numC: number):Observable<SessionCaisse[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})

    const url = `${this.apiURL+"/chercherParCaisseNumC"}/${etat}/${numC}`;
    return this.http.get<SessionCaisse[]>(url, {headers:httpHeaders});
  
  }

  chercherByEtatEtCaissier(etat:string,id: number):Observable<SessionCaisse[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})

    const url = `${this.apiURL+"/chercherParEtatETCaissier"}/${etat}/${id}`;
    return this.http.get<SessionCaisse[]>(url, {headers:httpHeaders});
  
  }
  chercherByEtatEtCaissierId(etat:string,id: number):Observable<SessionCaisse> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})

    const url = `${this.apiURL+"/chercherParCaissierEtEtat"}/${id}/${etat}`;
    return this.http.get<SessionCaisse>(url, {headers:httpHeaders});
  
  }

  modifierSession(session: SessionCaisse) {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})

    const url = `${this.apiURL+"/modifierSessionCaisse"}`;

    return this.http.put(url, session, {headers:httpHeaders});

  }






}
