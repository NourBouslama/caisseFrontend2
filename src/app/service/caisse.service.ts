import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Caisse } from '../Model/Caisse';
import { ModePaiement } from '../Model/ModePaiement';
import { AuthentifierService } from './connection.service';

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
  
    return this.http.get<Caisse[]>(this.apiURL+"/listerCaisses"
    );

  }

   
  listerCaisseParEtat(name): Observable<any> {


    const url = `${this.apiURL+"/listerCaisseParEtat"}/${name}`;
    return this.http.get<Caisse[]>(url);
  }

  ajouterCaisse(prod: Caisse): Observable<Caisse> {
 
    return this.http.post<Caisse>(this.apiURL+"/ajouterCaisse",prod
    );
  
  }

  consulterCaisse(id: number): Observable<Caisse> {
    const url = `${this.apiURL}/consulterCaisse/${id}`;
 
    return this.http.get<Caisse>(url);
  }

  updateCaisse(prod: Caisse): Observable<Caisse> {
   
    return this.http.put<Caisse>(this.apiURL + '/modifierCaisse', prod);
  }

  DesactiverCaisse(id: number) {
    const url = `${this.apiURL+"/desactiverCaisse"}/${id}`;
   
    return this.http.put(url,null);

  }

  ActiverCaisse(id: number) {
    const url = `${this.apiURL+"/activerCaisse"}/${id}`;
    return this.http.put(url,null);
  }

 

 
}
