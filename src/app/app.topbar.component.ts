import { Component, OnDestroy } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthentifierService } from './service/connection.service';
import { FactureService } from './service/facture.service';
import { PaiementService } from './service/paiement.service';
import { EncaissementService } from './service/encaissement.service';
import { Facture } from './Model/Facture';
import { Encaissement } from './Model/Encaissement';
import { Paiement } from './Model/Paiement';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {
    isLoggedin : boolean ;
    items: MenuItem[];
    factures:Facture[];
    encaissements:Encaissement[];
    paiements:Paiement[];

    constructor(public factureService: FactureService,
      public encaissementService: EncaissementService,
      public paiementService: PaiementService,
      public appMain: AppMainComponent,
      public authService: AuthentifierService,
      private router: Router) { }
    ngOnInit () {
        this.authService.loadToken();
        if (this.authService.getToken()==null || 
            this.authService.isTokenExpired())
              this.router.navigate(['/login']);

              this.items = [
                {
                    label:'Modifier profile',
                    icon:'pi pi-user-edit',
                    routerLink: ['modifierProfile'],
                },

                {
                    label:'Deconnection',
                    icon:'pi pi-sign-out',
                    command: (event) => {
                       this.onLogout();
                    }}

               
            ];
    }

             
      
      
      onLogout(){
        this.authService.logout();
      }

      synchroniser(){


this.encaissementService.listeEncaissements().subscribe(cai => {
  console.log(cai);
  this.encaissements = cai;

  this.encaissementService.modifierEncaissements(this.encaissements).subscribe(agt => {
    console.log(agt);
    });
});

/*this.paiementService.ListerTousPaiements().subscribe(cai => {
  console.log(cai);
  this.paiements = cai;

  this.paiementService.modifierPaiements(this.paiements).subscribe(agt => {
    console.log(agt);
    });;
});

this.factureService.listerFactures().subscribe(cai => {
  console.log(cai);
  this.factures = cai;

  this.factureService.modifierFactures(this.factures).subscribe(agt => {
    console.log(agt);
    });;
});*/

      }
}