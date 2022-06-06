import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../Model/Role';
import { Utilisateur } from '../Model/Utilisateur';
import { AuthentifierService } from '../service/authentifier.service';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styles: [
  ]
})
export class ConnectionComponent implements OnInit {

  utilisateur = new Utilisateur();
  u=new Utilisateur();
  err:number = 0;
  display: boolean = false;
  r=new Role(1,"caissier");

 
  clickAlert(){
    this.display = false;
 }


  constructor(private router: Router,private authentifierService:AuthentifierService,private utilisateurService:UtilisateurService) { }

  ngOnInit(): void {
  }

  onLoggedin()
{
    this.authentifierService.login(this.utilisateur).subscribe((data)=> {
    let jwToken = data.headers.get('Authorization');
    this.authentifierService.saveToken(jwToken);
    this.utilisateurService.chercherParEmail(this.utilisateur.email).
    subscribe( agt =>{ this.u = agt;
      (err)=>{ this.err = 0;}
    if(this.u.role.role=="caissier"){
      (err)=>{ this.err = 0;}
      this.router.navigate(['/session']);
      console.log("in if",this.u.role.role);
    }
  
  else{
  
    (err)=>{ this.err = 1;}
   
      this.display = true;
      this.router.navigate(['/connection']);
    

    console.log("in else",this.u.role.role);
  }
  console.log(this.u.role);

  }) ;


});


 





}


}
