import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Caisse } from 'src/app/Model/Caisse';
import { Caissier } from 'src/app/Model/Caissier';
import { SessionCaisse } from 'src/app/Model/SessionCaisse';
import { Utilisateur } from 'src/app/Model/Utilisateur';
import { AuthentifierService } from 'src/app/service/connection.service';
import { CaisseService } from 'src/app/service/caisse.service';
import { CaissierService } from 'src/app/service/caissier.service';
import { SessionService } from 'src/app/service/session.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.scss']
})
export class AddSessionComponent implements OnInit {
  caissiers: any = [];
  caisses: any = [];
  res: SessionCaisse[];
  res2: SessionCaisse[];
  caissier: Caissier[];
  caisse: Caisse[];
  newSession= new SessionCaisse();
  display: boolean = false;
  display2: boolean = false;
  u=new Utilisateur();

  constructor(private activatedRoute: ActivatedRoute, private sessionService: SessionService, private caisseService: CaisseService, private caissierService: CaissierService, private router: Router,public authService: AuthentifierService,private utilisateurService:UtilisateurService) { }

  ngOnInit(): void {
    this.onSelectCaisse();
    console.log(this.caisses);
    this.onSelectCaissier();
    console.log(this.caissiers);
  }

  onSelectCaisse() {
    this.caisseService.listerCaisseParEtat("active").subscribe(response => {
      console.log(response)
      this.caisses = response;

    });
  }

  onSelectCaissier() {
    this.caissierService.listeCaissiersByEtat("active").subscribe(response => {
      console.log(response)
      this.caissiers = response;

    });
  } 
    addSession(){
      this.utilisateurService.chercherParEmail(this.authService.loggedUser).
      subscribe( agt =>{ this.u = agt;

      this.sessionService.chercherByEtatEtCaissier("en cours",this.u.idU).subscribe(enc => {
        this.res2 = enc; 
     
     this.sessionService.chercherByCaisseNumC("en cours",this.newSession.caisse.numC).subscribe(enc => {
      this.res = enc; 


      if(this.res.length > 0){
        this.display = true;
     }
     else if(this.res2.length > 0){
      this.display = true;
     }
     else{
     
      this.newSession.montantSession=this.newSession.montantInit;
      this.newSession.caissier=this.u;
       this.sessionService.ajouterSession(this.newSession)
       .subscribe(sess => {
       console.log(sess);
       });
       this.router.navigate(['/session']).then(() => {
        window.location.reload();
      });
  




     }
    });

   });
  });
  }
  clickAlert(){
    this.display = false;
    this.display2 = false;
  
  }
  

}
