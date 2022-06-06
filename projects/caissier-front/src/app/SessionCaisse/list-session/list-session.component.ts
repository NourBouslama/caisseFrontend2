import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionCaisse } from 'src/app/Model/SessionCaisse';
import { Utilisateur } from 'src/app/Model/Utilisateur';
import { AuthentifierService } from 'src/app/service/connection.service';
import { SessionService } from 'src/app/service/session.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-list-session',
  templateUrl: './list-session.component.html',
  styleUrls: ['./list-session.component.scss']
})
export class ListSessionComponent implements OnInit {
  sessionCaisse: SessionCaisse;
  sessionCaisses: SessionCaisse[];
  res:SessionCaisse[];
  display: boolean = false;
  u=new Utilisateur();

  constructor(private sessionService: SessionService, private router: Router,public authService: AuthentifierService,private utilisateurService:UtilisateurService) { }

  ngOnInit(): void {
    
    this.utilisateurService.chercherParEmail(this.authService.loggedUser).
    subscribe( agt =>{ this.u = agt;
    this.sessionService.listeSessionByCaissierId(this.u.idU).subscribe(cai => {
      console.log(cai);
      this.sessionCaisses = cai;
    });
  });
  }
  fermerSession(p: SessionCaisse) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.sessionService.FermerSession(p.numS).subscribe(() => {
        console.log("session fermer");
      });
      this.router.navigate(['/session']).then(() => {
        window.location.reload();
      });
   
  }

  ouvrirSession(p: SessionCaisse) {
   /* let conf = confirm("Etes-vous sûr ?");
    if (conf)*/
    this.sessionService.chercherByCaisseNumC("en cours",p.caisse.numC).subscribe(enc => {
      this.res = enc;
      console.log("res=",this.res.length);

     // console.log(this.newSession.caisse.numC);
   

      if(this.res.length > 0){
        this.display = true;
     }
     else{
      this.sessionService.OuvrirSession(p.numS).subscribe(() => {
        console.log("session ouvert");
        this.router.navigate(['/session']).then(() => {
          window.location.reload();
        });
      });
      
   
     }
    }); 
}
clickAlert(){
  this.display = false;

}
}
