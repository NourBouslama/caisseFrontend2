import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Facture } from 'src/app/Model/Facture';
import { FactureService } from 'src/app/service/facture.service';
import { PaiementService } from 'src/app/service/paiement.service';

@Component({
  selector: 'app-annuler-paiement',
  templateUrl: './annuler-paiement.component.html',
  styleUrls: ['./annuler-paiement.component.scss']
})
export class AnnulerPaiementComponent implements OnInit {

    //la liste des types des références crééer par défaut
    ListeReference:any[]=[];
    //référence séléctionné
    selectedReference;
    //la liste des factures a chercher
    Factures:Facture[];
    //valeur pr contenir la liste des factures sélectionnées
    factlist:Facture[]=[];

    isselected:boolean;

  //la valeur de référence sélectionné
    reference:number;


    constructor(  private factureService: FactureService,private paiementService: PaiementService, private activatedRoute: ActivatedRoute,private router :Router) {
        this.ListeReference = [
            { label: "Référence Facture", value: 1, isSelected:false},
            { label: "Référence Client", value: 2, isSelected:false},
            { label: "Référence Contrat", value: 3, isSelected:false}
          ];
     }

     ngOnInit(): void {

     }
     chercherfacture()
     {
          console.log('le référence selectionné',this.selectedReference);
          console.log(this.reference);

          if(this.selectedReference==1){
            this.factureService.chercherFactureRefFacture(this.reference).
            subscribe(fact => {
                this.Factures = fact;
                });
          }
          else  if(this.selectedReference==2){
            this.factureService.chercherFactureRefclient(this.reference).
            subscribe(fact => {
                this.Factures = fact;
                });
          }
          else  if(this.selectedReference==3){
            this.factureService.chercherFactureRefContrat(this.reference).
            subscribe(fact => {
                this.Factures = fact;
                });
          }

      }


  annulerPaiement()
    {
        this.factlist=this.Factures.filter(x=>x.isselected==true);
        console.log('factlist=',this.factlist);
        this.paiementService.AnnulerPaiement(this.factlist)
        .subscribe(agt => {
         console.log(agt);
        console.log("annulation ok");
        });
      //  this.router.navigate(['/historiquePaiement']);
    }


  onChange()
  {
    console.log(this.Factures.filter(x=>x.isselected==true));
    console.log(this.ListeReference.filter(x=>x.isSelected==true));
  }

}