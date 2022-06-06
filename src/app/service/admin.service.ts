import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../Model/Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  apiURL: string = 'http://localhost:8080/caisses/admin';
  constructor(private http: HttpClient) {
  }

  modifierAdmin(admin: Admin): Observable<Admin> {
     
    return this.http.put<Admin>(this.apiURL + '/modifierAdmin', admin);

  }
}
