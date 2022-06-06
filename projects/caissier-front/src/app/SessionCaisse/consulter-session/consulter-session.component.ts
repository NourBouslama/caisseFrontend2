import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Encaissement } from 'src/app/Model/Encaissement';
import { SessionCaisse } from 'src/app/Model/SessionCaisse';
import { EncaissementService } from 'src/app/service/encaissement.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-consulter-session',
  templateUrl: './consulter-session.component.html',
  styleUrls: ['./consulter-session.component.scss']
})
export class ConsulterSessionComponent implements OnInit {

  currentSession = new SessionCaisse();

  sessionCaisses:SessionCaisse[];
  list: any = [];
  encaiss: any = [];
  nbFactPayer :number;
  nbFactAnnuler :number;
  constructor(private activatedRoute: ActivatedRoute,private sessionService: SessionService,private encaissementService: EncaissementService) { }

  ngOnInit(): void {
    this.sessionService.consulterSession(this.activatedRoute.snapshot.params.numS).
    subscribe( sess =>{ this.currentSession = sess; } ) ;
    console.log(this.currentSession.encaissements);

    this.encaissementService.listeEncaissementsBySession(this.activatedRoute.snapshot.params.numS).subscribe(enc => {
      console.log(enc);
      this.encaiss = enc;
    });

    this.encaissementService.listeEncaissementsByEtatETSession("payer",this.activatedRoute.snapshot.params.numS).subscribe(enc => {
      console.log(enc);
      this.list = enc;
      this.nbFactPayer=this.list.length;  
    });

    this.encaissementService.listeEncaissementsByEtatETSession("annuler",this.activatedRoute.snapshot.params.numS).subscribe(enc => {
      console.log(enc);
      this.list = enc;
      this.nbFactAnnuler=this.list.length;  
    });
/*
    this.sessionService.listeSession().subscribe(cai => {
      console.log(cai);
      this.sessionCaisses = cai;
    });*/
  }




}
