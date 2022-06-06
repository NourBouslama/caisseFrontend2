import { Component, OnInit } from '@angular/core';
import { Caisse } from 'src/app/Model/Caisse';
import { ActivatedRoute } from '@angular/router';
import { CaisseService } from 'src/app/service/caisse.service';

@Component({
  selector: 'app-consulter-caisse',
  templateUrl: './consulter-caisse.component.html',
  styleUrls: ['./consulter-caisse.component.scss']
})
export class ConsulterCaisseComponent implements OnInit {

  currentCaisse = new Caisse();
  constructor(private activatedRoute: ActivatedRoute,
    private caisseService: CaisseService) { }

  ngOnInit(): void {
    this.caisseService.consulterCaisse(this.activatedRoute.snapshot.params.idC).
    subscribe( cais =>{ this.currentCaisse = cais; } ) ;
  }

}
