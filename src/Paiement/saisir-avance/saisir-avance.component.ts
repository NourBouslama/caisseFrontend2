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
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-saisir-avance',
  templateUrl: './saisir-avance.component.html',
  styleUrls: ['./saisir-avance.component.scss']
})
export class SaisirAvanceComponent implements OnInit {
  confirm:FormGroup;

  newPaiement = new Paiement();
  //la liste des modes cherchée
  Listemodes: ModePaiement[];

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
    private utilisateurService:UtilisateurService,
    public authService: AuthentifierService,) { }

  ngOnInit(): void {
      this.chercherSession();
      this.confirm=new FormGroup({
        'montant':new FormControl(null,Validators.required),
        'reference':new FormControl(null,Validators.required),
        'mode':new FormControl(null,Validators.required),
            });
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
    //ajouter nouv montant au ancien montant session
    this.newEncaissement.session.montantSession+=this.newEncaissement.montantE;
    //modifier session
    this.sessionCaisseService
    .modifierSession(this.newEncaissement.session)
    .subscribe((sess) => {

    });
    this.newEncaissement.etat="avance"
    this.newEncaissement.dateE=new Date();
    //ajouter encaissment
   this.encaissementService
        .ajouterEncaissement(this.newEncaissement)
        .subscribe((encai) => {
    //Ajouter Paiement
    this.ajouterPaiement(encai);
            console.log('encaissement effectuée : ',encai);
        });

        this.router.navigate(['/historiquePaiement']).then(() => {
          window.location.reload();
        });
}

ajouterPaiement(encaissement: Encaissement) {
//chercherClient
  this.clientService.chercherClient(this.referenceClient).subscribe(
    (cli)=>{  
    this.newPaiement.cli=cli;
   
      })
      this.newPaiement.encaissement = encaissement;
      this.newPaiement.dateP=new Date();
      this.newPaiement.etat="avance"
      //this.newPaiement.cli=this.client;
      console.log( this.newPaiement);
      this.paiementService
          .saisirAvance(this.newPaiement)
          .subscribe((paiement) => {
              console.log('le paiement ajouté', paiement);
            //  this.payerFactures(paiement.idP);
          });
}
/*chercherClient(){
    this.clientService.chercherClient(this.referenceClient).subscribe(
        (cli)=>{  this.newPaiement.cli=cli;
        }
    )
}*/

}
