import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/Model/Client';
import { Encaissement } from 'src/app/Model/Encaissement';
import { ModePaiement } from 'src/app/Model/ModePaiement';
import { Paiement } from 'src/app/Model/Paiement';
import { Utilisateur } from 'src/app/Model/Utilisateur';
import { AuthentifierService } from 'src/app/service/connection.service';
import { CaisseService } from 'src/app/service/caisse.service';
import { ClientService } from 'src/app/service/client.service';
import { EncaissementService } from 'src/app/service/encaissement.service';
import { PaiementService } from 'src/app/service/paiement.service';
import { SessionService } from 'src/app/service/session.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-saisir-avance',
  templateUrl: './saisir-avance.component.html',
  styleUrls: ['./saisir-avance.component.scss']
})
export class SaisirAvanceComponent implements OnInit {

  newPaiement = new Paiement();
  //la liste des modes cherchée
  Listemodes: ModePaiement[];
  idU: number = 1;
  newEncaissement = new Encaissement();
  referenceClient: number;
  montantsaisie:number;
  client =new Client();
  u=new Utilisateur();

  constructor(
    private clientService: ClientService,
    private sessionCaisseService: SessionService,
    private caisseService: CaisseService,
    private paiementService: PaiementService,
    private encaissementService: EncaissementService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public authService: AuthentifierService,
    private utilisateurService:UtilisateurService) { }

  ngOnInit(): void {
      this.chercherSession();
  }
  chercherSession() {
    this.utilisateurService.chercherParEmail(this.authService.loggedUser).
    subscribe( agt =>{ this.u = agt;

    this.sessionCaisseService
        .chercherByEtatEtCaissierId("en cours",this.u.idU)
        .subscribe((sess) => {
            console.log(sess);
            this.newEncaissement.session = sess;
            this.Listemodes = sess.caisse.modes;
            console.log('le mode choisi : ', this.newPaiement.modePaiement);
            //this.ajouterEncaissement();

        });
      });
}


ajouter(){


    this.newEncaissement.session.montantSession=this.newEncaissement.montantE;
    this.newEncaissement.etat="avance"
    this.encaissementService
        .ajouterEncaissement(this.newEncaissement)
        .subscribe((encai) => {

            this.ajouterPaiement(encai);
            console.log('encaissement effectuée : ',encai);
        });
}

ajouterPaiement(encaissement: Encaissement) {

    this.newPaiement.encaissement = encaissement;
    this.newPaiement.etat = "avance";
    this.clientService.chercherCaisse(this.referenceClient).subscribe(
      (cli)=>{  this.newPaiement.cli=cli;
   

    //this.newPaiement.cli=this.client;
    console.log( this.newPaiement);
    this.paiementService
        .ajouterPaiement(this.newPaiement)
        .subscribe((paiement) => {
            console.log('le paiement ajouté', paiement);
          //  this.payerFactures(paiement.idP);
        });
      }
      )
}
/*chercherClient(){
    this.clientService.chercherCaisse(this.referenceClient).subscribe(
        (cli)=>{  this.newPaiement.cli=cli;
        }
    )
}*/

}
