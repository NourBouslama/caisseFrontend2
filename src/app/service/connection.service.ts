import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Utilisateur } from '../Model/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthentifierService {
  apiURL: string = 'http://localhost:8080/caisses';
  token: string;
  isloggedIn: Boolean = false;
  public loggedUser: string;
  public role: string[];
  //err:number = 0;
  private helper = new JwtHelperService();


  constructor(private router: Router,
    private http: HttpClient) { }

  connection(user: Utilisateur) {
    return this.http.post<Utilisateur>(this.apiURL + '/login', user, { observe: 'response' });
  }
  saveToken(jwt: string) {
    localStorage.setItem('jwt', jwt);
    this.token = jwt;
    this.isloggedIn = true;
  }
  loadToken() {
    this.token = localStorage.getItem('jwt');
    this.decodeJWT();
  }
  getToken(): string {
    return this.token;
  }

  isTokenExpired(): Boolean {
    return this.helper.isTokenExpired(this.token);
  }

  logout() {
    this.loggedUser = undefined;
    this.role = undefined;
    this.token = undefined;
    this.isloggedIn = false;
    localStorage.removeItem('jwt');
    this.router.navigate(['/connection']);
  }
  decodeJWT() {
    if (this.token == undefined)
      return;
    const decodedToken = this.helper.decodeToken(this.token);
    this.role = decodedToken.role;
    //console.log("roles "+this.roles)
    this.loggedUser = decodedToken.sub;
  }

  isAdmin(): Boolean {
    if (!this.role)
      return false;
    return this.role.indexOf('admin') >= 0;

  }
  isCaissier(): Boolean {
    if (!this.role)
      return false;
    return this.role.indexOf('caissier') >= 0;

  }
}
