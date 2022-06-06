import { Component, OnInit } from '@angular/core';
import { Paiement } from 'src/app/Model/Paiement';
import { Utilisateur } from 'src/app/Model/Utilisateur';
import { AuthentifierService } from 'src/app/service/connection.service';
import { PaiementService } from 'src/app/service/paiement.service';
import { SessionService } from 'src/app/service/session.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-historique-paiement',
  templateUrl: './historique-paiement.component.html',
  styleUrls: ['./historique-paiement.component.scss']
})
export class HistoriquePaiementComponent implements OnInit {

  
  paiements :Paiement[];
  idU:number=1;
  u=new Utilisateur();

  constructor(  private paiementService: PaiementService,private sessionCaisseService: SessionService,public authService: AuthentifierService,private utilisateurService:UtilisateurService) { }

  ngOnInit(): void {
    this.utilisateurService.chercherParEmail(this.authService.loggedUser).
    subscribe( agt =>{ this.u = agt;

      this.sessionCaisseService.chercherByEtatEtCaissierId("en cours",this.u.idU).subscribe(session => {
          console.log(session.numS);
          this.listerPaiements(session.numS);
                      });
     });
  }

  listerPaiements(nums: number)
  {
      this.paiementService.listerPaiements(nums).subscribe(paie => {
          console.log(paie);
          this.paiements=paie//.push(paie);
         // console.log(this.paiements[1].factures);

          });
  }


}
