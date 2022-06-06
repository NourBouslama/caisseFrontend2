import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Checkbox } from 'primeng/checkbox';
import { Encaissement } from 'src/app/Model/Encaissement';
import { SessionCaisse } from 'src/app/Model/SessionCaisse';
import { EncaissementService } from 'src/app/service/encaissement.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-fermer-session',
  templateUrl: './fermer-session.component.html',
  styleUrls: ['./fermer-session.component.scss']
})
export class FermerSessionComponent implements OnInit {

val:number=0;
val1:number=0;
val2:number=0;
val3:number=0;
val4:number=0;
val5:number=0;
val6:number=0;
val7:number=0;
val8:number=0;
val9:number=0;
val10:number=0;
val11:number=0;
val12:number=0;
resultat:number=0

i:number=0;
res:number;
res2:number;
nb:number;
nb1:number;
nombre:Encaissement[]=[];

pratique:number =0;
montant:number ;

box :Checkbox;

p: SessionCaisse;

sessionCaisses:SessionCaisse[];
currentSession = new SessionCaisse();
  constructor(private activatedRoute: ActivatedRoute,private sessionService: SessionService,private router :Router,private encaissementService: EncaissementService) { }

  ngOnInit(): void {
    this.sessionService.consulterSession(this.activatedRoute.snapshot.params.numS).
    subscribe( sess =>{ this.currentSession = sess;

     /* for(var e=0;e<this.currentSession.caisse.modes.length;e++){

        this.encaissementService.listerEncaissementParNumSEtatEtPaiementMode(this.currentSession.numS,"payer",this.currentSession.caisse.modes[0].libelle).subscribe( encai =>{ 
          this.nombre = encai;  
          this.nb=this.nombre.length;
          console.log("nb=",this.nombre);

          for(var a=0;a<=this.nombre.length;a++){
            this.montant=this.montant+this.nombre[a].montantE;
          }

        } ) ;
      }*/

     /* this.encaissementService.listerEncaissementParNumSEtatEtPaiementMode(this.currentSession.numS,"payer",this.currentSession.caisse.modes[0].libelle).
      subscribe( encai =>{ 
        this.nombre = encai; 
        this.nb=this.nombre.length;
        console.log("nb=",this.nombre);
      } ) ;
      this.encaissementService.listerEncaissementParNumSEtatEtPaiementMode(this.currentSession.numS,"payer","chéque").
      subscribe( encai =>{ 
        this.nombre = encai; 
        this.nb1=this.nombre.length;
        console.log("nb=",this.nombre);
      } ) ;*/

      /*
for(var n=0;n<this.currentSession.caisse.modes.length;n++){

  this.encaissementService.listerEncaissementParEtatEtPaiementMode("payer",this.currentSession.caisse.modes[0].libelle).
  subscribe( sess =>{ this.nombre = sess; 
    this.res=this.nombre.length;
    console.log("nb=",this.nombre);
  } ) ;
}*/
 
/*this.encaissementService.listerEncaissementParEtatEtPaiementMode("payer",this.currentSession.caisse.modes[0].libelle).
        subscribe( sess =>{ this.nombre = sess; 
          this.nb=this.nombre.length;
          console.log("nb=",this.nombre);
        } ) ;
        this.encaissementService.listerEncaissementParEtatEtPaiementMode("payer",this.currentSession.caisse.modes[1].libelle).
        subscribe( sess =>{ this.nombre = sess; 
          this.nb1=this.nombre.length;
          console.log("nb=",this.nombre);
        } ) ;*/
       
     
      
      
    } ) ;
    //console.log(this.currentSession.caisse.modes.length);
    //console.log("nb=",this.nombre);
  /*  this.encaissementService.listerPaiementByEtatEtMode("payer","chéque").
      subscribe( sess =>{ this.nombre = sess; 
        console.log("nb=",this.nombre.length);
        this.res=this.nombre.length;
      
      } ) ;*/

      
   
        
 }
  Calculer(){
    this.resultat=this.val*50+this.val1*5+this.val2*20+this.val3*2+this.val4*10+this.val5+this.val6*5+this.val7*0.5+this.val8*0.2+this.val9*0.1+this.val10*0.05+this.val11*0.02+this.val12*0.01;
 }

 FermerSession(s:SessionCaisse){
  this.sessionService.FermerSession(s.numS).subscribe(() => {
  console.log("session fermer");
  });


  /*this.router.navigate(['/session']).then(() => {
    window.location.reload();
    });*/

 }

 
 FermerJournalCaisse(p: SessionCaisse) {
    this.sessionService.fermerJournalCaisse(p.numS).subscribe(() => {
      console.log("journal caisse fermé");
    });
 
}
listerPaiementByEtatEtMode(num:number,m:string):number{

  /*this.encaissementService.listerEncaissementParEtatEtPaiementMode("payer","chéque").
  subscribe( sess =>{ this.nombre = sess; } ) ;
  console.log(this.nombre);*/


    this.encaissementService.listerEncaissementParNumSEtatEtPaiementMode(num,"payer",m).subscribe( encai =>{ 
      this.nombre = encai; 
      this.nb=this.nombre.length;
      console.log("nb=",this.nombre);

      for(var a=0;a < this.nombre.length; a++){
        this.montant+=this.nombre[a].montantE;
      }

    } ) ;
    return this.montant;
  
}
  


}
