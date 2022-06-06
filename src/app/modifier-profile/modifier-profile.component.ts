import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../Model/Utilisateur';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from '../service/utilisateur.service';
import { AuthentifierService } from '../service/connection.service';
import { CaissierService } from '../service/caissier.service';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-modifier-profile',
  templateUrl: './modifier-profile.component.html',
  styleUrls: ['./modifier-profile.component.scss']
})
export class ModifierProfileComponent implements OnInit {
  currentUtilisateur = new Utilisateur();
  constructor(private activatedRoute: ActivatedRoute,
    private utilisateurService: UtilisateurService,
    private caissierService: CaissierService,
    private adminService: AdminService,
    private router :Router,
    public authService: AuthentifierService) { }

  ngOnInit(): void {
    this.utilisateurService.chercherParEmail(this.authService.loggedUser).
 subscribe( cais =>{ this.currentUtilisateur = cais; } ) ;


  }


  modifierUtilisateur(){
    if(this.currentUtilisateur.role.role=="admin"){
      this.adminService.modifierAdmin(this.currentUtilisateur).subscribe(cais => {
        this.authService.logout();
    
        },(error) => { alert("Problème lors de la modification !"); }
        );
    }else if (this.currentUtilisateur.role.role=="caissier"){
      this.caissierService.updateCaissier(this.currentUtilisateur).subscribe(cais => {
        this.authService.logout();
    
        },(error) => { alert("Problème lors de la modification !"); }
        );
    }
    
      }
  

}
