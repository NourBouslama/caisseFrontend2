import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Facture } from 'src/app/Model/Facture';
import { FactureService } from 'src/app/service/facture.service';

@Component({
  selector: 'app-lister-facture',
  templateUrl: './lister-facture.component.html',
  styleUrls: ['./lister-facture.component.scss']
})
export class ListerFactureComponent implements OnInit {

  ListeReference:SelectItem[];
  selectedReference: SelectItem;
  reference:number;
  Factures:Facture[];
  facture:Facture;
  constructor(  private factureService: FactureService,private activatedRoute: ActivatedRoute) {
      this.ListeReference = [
          { label: "Référence Facture", value: 1},
          { label: "Référence Client", value: 2},
          { label: "Référence Contrat", value: 3}
        ];
   }

  ngOnInit(): void {
     /// this.factureService.chercherFactureRefFacture(this.activatedRoute.snapshot.params.reference).
     this.factureService.chercherFactureRefContrat(this.activatedRoute.snapshot.params.reference).
      subscribe(fact => {
          this.Factures = fact;// this.facture = fact;
          });
  }

}
