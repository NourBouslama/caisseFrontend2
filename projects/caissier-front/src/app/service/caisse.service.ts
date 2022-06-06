import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Caisse } from '../Model/Caisse';
import { ModePaiement } from '../Model/ModePaiement';
import { AuthentifierService } from './authentifier.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CaisseService {
  apiURL: string = 'http://localhost:8080/caisses/api';
  
  modes : ModePaiement[];
  caisses : Caisse[];
  constructor(private http : HttpClient, private authService : AuthentifierService) { }

  
  listeCaisses(): Observable<any> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})

    return this.http.get<Caisse[]>(this.apiURL+"/listerCaisses",{headers:httpHeaders});
  }

  
  listerCaisseParEtat(name): Observable<any> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})

    const url = `${this.apiURL+"/listerCaisseParEtat"}/${name}`;
    return this.http.get<Caisse[]>(url,{headers:httpHeaders});
  }




  ajouterCaisse(prod: Caisse): Observable<Caisse> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})

    return this.http.post<Caisse>(this.apiURL+"/ajouterCaisse", prod,{headers:httpHeaders});
  }

  consulterCaisse(id: number): Observable<Caisse> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})

    const url = `${this.apiURL+"/consulterCaisse"}/${id}`;
    return this.http.get<Caisse>(url,{headers:httpHeaders});
  }

  updateCaisse(prod: Caisse): Observable<Caisse> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})

    return this.http.put<Caisse>(this.apiURL+"/modifierCaisse", prod,{headers:httpHeaders});
  }

  DesactiverCaisse(id: number) {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})

    const url = `${this.apiURL+"/desactiverCaisse"}/${id}`;
    return this.http.put(url,{headers:httpHeaders});
  }

  ActiverCaisse(id: number) {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})

    const url = `${this.apiURL+"/activerCaisse"}/${id}`;
    return this.http.put(url,{headers:httpHeaders});
  }



 
}
