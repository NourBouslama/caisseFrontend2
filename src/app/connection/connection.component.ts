import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../Model/Utilisateur';
import { Router } from '@angular/router';
import { AuthentifierService } from '../service/connection.service';
import { Role } from '../Model/Role';
import { UtilisateurService } from '../service/utilisateur.service';
import { FactureService } from '../service/facture.service';
import { Facture } from '../Model/Facture';
import { ContratService } from '../service/contrat.service';
import { ClientService } from '../service/client.service';
import { Contrat } from '../Model/Contrat';
import { Client } from '../Model/Client';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
  
})
export class ConnectionComponent implements OnInit {
  confirm:FormGroup;
  utilisateur = new Utilisateur();
  u=new Utilisateur();
  err:number = 0;
  display: boolean = false;
  r=new Role(1,"admin");

  facts: Facture[];
  contrats: Contrat[];
  clients: Client[];

 
  clickAlert(){
    this.display = false;
 }


  constructor( private factureService: FactureService,
    private contratService: ContratService,
    private clientService: ClientService,
    private router: Router,
    private authentifierService:AuthentifierService,
    private utilisateurService:UtilisateurService) { }

  ngOnInit(): void {
    this.confirm=new FormGroup({
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'motDePasse':new FormControl(null,[Validators.required,Validators.minLength(3)]),
          });
  }

  Connection()
{
    this.authentifierService.connection(this.utilisateur).subscribe((data)=> {
    let jwToken = data.headers.get('Authorization');
    this.authentifierService.saveToken(jwToken);
    this.utilisateurService.chercherParEmail(this.utilisateur.email).
    subscribe( agt =>{ this.u = agt;
      
    if(this.u.role.role=="admin"){
      this.router.navigate(['/acceuil']);
      console.log("in if",this.u.role.role);
    }
    else if(this.u.role.role=="caissier"){

      this.router.navigate(['/session']);
      console.log("in if",this.u.role.role);


//recuperer les contrats de la base distant
this.contratService.Recuperercontrats().subscribe((fact) => {
  this.contrats = fact;
  console.log("liste des contrats :",this.contrats)
//ajouter les contrats recupere a la base local
  this.contratService.ajoutercontrats(this.contrats).subscribe(agt => {
      console.log(agt);
      });
});

//recuperer les clients de la base distante
this.clientService.Recupererclients().subscribe((fact) => {
  this.clients = fact;
  console.log("liste des clients :",this.clients)
//ajouter les clients recupere a la base local
  this.clientService.ajouterclients(this.clients).subscribe(agt => {
      console.log(agt);
      });
});




    }
  else{
      this.router.navigate(['/connection']);
      console.log("in else",this.u.role.role);
  }
  console.log(this.u.role);

  }) ;


});


 





}


}
