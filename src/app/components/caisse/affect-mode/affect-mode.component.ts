import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AffectMode } from 'src/app/Model/AffectMode';
import { Caisse } from 'src/app/Model/Caisse';
import { ModePaiement } from 'src/app/Model/ModePaiement';
import { CaisseService } from 'src/app/service/caisse.service';
import { ModeService } from 'src/app/service/mode.service';

@Component({
  selector: 'app-affect-mode',
  templateUrl: './affect-mode.component.html',
  styleUrls: ['./affect-mode.component.scss']
})
export class AffectModeComponent implements OnInit {
  modesPaiement: any = [];
  //currentCaisse = new AffectMode();
  affect = new AffectMode();
  selectedModesCode: number[];
  modes: ModePaiement[];
  newCaisse= new Caisse();
  constructor(private activatedRoute: ActivatedRoute, private caisseService: CaisseService, private modeService: ModeService, private router: Router) { }

  ngOnInit(): void {
    /*this.caisseService.consulterCaisse(this.activatedRoute.snapshot.params.id).subscribe( liv =>{ this.currentCaisse = liv; } ) ;*/
    this.onSelectMode();
    console.log(this.modes);
  }
  onSelectMode() {
    this.modeService.listeModes().subscribe(response => {
      console.log(response)
      this.modesPaiement = response;

    });
  }
  affectMode() {

    console.log(this.selectedModesCode);
  }
  addCaisse(){
    this.caisseService.ajouterCaisse(this.newCaisse)
    .subscribe(prod => {
    console.log(prod);
    });
  }

  onSelectAll(items: any) {
    console.log('onSelectAll', items);
  }

}
