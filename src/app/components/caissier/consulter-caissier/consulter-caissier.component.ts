import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Caissier } from 'src/app/Model/Caissier';
import { CaissierService } from 'src/app/service/caissier.service';

@Component({
  selector: 'app-consulter-caissier',
  templateUrl: './consulter-caissier.component.html',
  styleUrls: ['./consulter-caissier.component.scss']
})
export class ConsulterCaissierComponent implements OnInit {

  currentCaissier = new Caissier();
    constructor(private activatedRoute: ActivatedRoute,
      private caissierService: CaissierService) { }

    ngOnInit(): void {
      this.caissierService.consulterCaissier(this.activatedRoute.snapshot.params.matricule).
   subscribe( cais =>{ this.currentCaissier = cais; } ) ;
    }
}
