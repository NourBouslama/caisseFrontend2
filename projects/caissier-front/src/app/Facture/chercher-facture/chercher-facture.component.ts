import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Encaissement } from 'src/app/Model/Encaissement';
import { Facture } from 'src/app/Model/Facture';
import { ModePaiement } from 'src/app/Model/ModePaiement';
import { Paiement } from 'src/app/Model/Paiement';
import { Utilisateur } from 'src/app/Model/Utilisateur';
import { AuthentifierService } from 'src/app/service/connection.service';
import { CaisseService } from 'src/app/service/caisse.service';
import { EncaissementService } from 'src/app/service/encaissement.service';
import { FactureService } from 'src/app/service/facture.service';
import { PaiementService } from 'src/app/service/paiement.service';
import { SessionService } from 'src/app/service/session.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-chercher-facture',
  templateUrl: './chercher-facture.component.html',
  styleUrls: ['./chercher-facture.component.scss']
})
export class ChercherFactureComponent implements OnInit {

   //la liste des types des références crééer par défaut
   ListeReference: any[] = [];
   //référence séléctionné
   selectedReference;
   //la liste des factures cherchée
   Factures: Facture[];
   //valeur pr contenir la liste des factures sélectionnées
   factlist: Facture[] = [];

   //mode sélectionnée
   valMode;
   //la liste des modes cherchée
   Listemodes: ModePaiement[];

   display: boolean;

   /*numSession: number = 1;
   numCaisse: number = 3;
   idU: number = 1;*/
   newEncaissement = new Encaissement();
   mts: number = 0;
   //facture=new Facture();
   isselected: boolean;
   //selectedFactures
   selectedListFactures: Facture[] = [];
   //la valeur de référence sélectionné
   reference: number;
   newPaiement = new Paiement();
   u=new Utilisateur();

   constructor(
       private factureService: FactureService,
       private sessionCaisseService: SessionService,
       private caisseService: CaisseService,
       private paiementService: PaiementService,
       private encaissementService: EncaissementService,
       private activatedRoute: ActivatedRoute,
       private router: Router,
       public authService: AuthentifierService,
       private utilisateurService:UtilisateurService
   ) {
       this.ListeReference = [
           { label: 'Référence Facture', value: 1, isSelected: false },
           { label: 'Référence Client', value: 2, isSelected: false },
           { label: 'Référence Contrat', value: 3, isSelected: false },
       ];
   }

   ngOnInit(): void {
       this.chercherSession();
   }
   chercherfacture() {
       console.log('le référence selectionné', this.selectedReference);
       console.log(this.reference);

       if (this.selectedReference == 1) {
           this.factureService
               .chercherFactureRefFacture(this.reference)
               .subscribe((fact) => {
                   this.Factures = fact;
               });
       } else if (this.selectedReference == 2) {
           this.factureService
               .chercherFactureRefclient(this.reference)
               .subscribe((fact) => {
                   this.Factures = fact;
               });
       } else if (this.selectedReference == 3) {
           this.factureService
               .chercherFactureRefContrat(this.reference)
               .subscribe((fact) => {
                   this.Factures = fact;
               });
       }
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
               console.log(this.Listemodes);
               console.log('le mode choisi : ', this.newPaiement.modePaiement);
           });

        });
   }


   ajouter() {
       this.factlist = this.Factures.filter((x) => x.isselected == true);
       for (var i = 0; i < this.factlist.length; i++) {
           this.mts += this.factlist[i].montant;
       }

       this.newEncaissement.montantE = this.mts;
       this.newEncaissement.session.montantSession+=this.mts;
       this.newEncaissement.session.nbFacture += this.factlist.length;
       //modifier la session
       this.sessionCaisseService
       .modifierSession(this.newEncaissement.session)
       .subscribe((sess) => {

       });

       this.encaissementService
           .ajouterEncaissement(this.newEncaissement)
           .subscribe((encai) => {

               this.ajouterPaiement(encai);
               console.log('encaissement effectuée : ',encai);
           });
   }

   ajouterPaiement(encaissement: Encaissement) {

       this.newPaiement.encaissement = encaissement;
       this.paiementService
           .ajouterPaiement(this.newPaiement)
           .subscribe((paiement) => {
               console.log('le paiement ajouté', paiement);
            //   this.factlist = this.Factures.filter((x) => x.isselected == true);

               for (var i = 0; i < this.factlist.length; i++) {
                   this.factlist[i].paiement=paiement;
               }
               this.payerFactures(paiement.idP);
           });
   }

   payerFactures(idP: number) {

       console.log('factlist aprés l ajoutation des paiements=', this.factlist);
       this.paiementService
           .PayerFacture(this.factlist)
           .subscribe((agt) => {
               console.log('paiement effectuée',agt);
           });
       this.router.navigate(['/historiquePaiement']);
   }




   onChange() {
       console.log(this.Factures.filter((x) => x.isselected == true));

       console.log('liste paiement', this.newPaiement.factures);

       console.log('le mode choisi : ', this.newPaiement.modePaiement);
       console.log(this.Listemodes.filter((x) => x.libelle));
       console.log(this.ListeReference.filter((x) => x.isSelected == true));
   }

}