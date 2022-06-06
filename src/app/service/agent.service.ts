import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from '../Model/Agent';
import { AuthentifierService } from './connection.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AgentService {

  apiURL: string = 'http://localhost:8080/caisses/agent';
  constructor(private http: HttpClient, private authService : AuthentifierService) {
  }
  listeAgents(): Observable<Agent[]> {
  
    return this.http.get<Agent[]>(this.apiURL+"/listerAgents"
    
    );
  
  }
  ajouterAgent(agent: Agent): Observable<Agent> {
  
    return this.http.post<Agent>(this.apiURL+"/ajouterAgent",agent
    
    );
 
  }


  desactiverAgent(idU: number) {
    const url = `${this.apiURL}/desactiverAgent/${idU}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = {
      headers:new HttpHeaders({"Content-Type": "application/json","Authorization":jwt}), 
      withCredentials: true
    };

    return this.http.put(url,null);
  }

  activerAgent(id: number) {
    const url = `${this.apiURL}/activerAgent/${id}`;
   
    return this.http.put(url,null);

  }

  consulterAgent(idU: number): Observable<Agent> {
    const url = `${this.apiURL}/consulterAgent/${idU}`;
   
    return this.http.get<Agent>(url
      );
  }

  updateAgent(agent: Agent): Observable<Agent> {
 
   
    return this.http.put<Agent>(this.apiURL + '/modifierAgent', agent
    );
  }

}
