import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Caissier } from 'src/app/Model/Caissier';
import { CaissierService } from 'src/app/service/caissier.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-caissier',
  templateUrl: './update-caissier.component.html',
  styleUrls: ['./update-caissier.component.scss']
})
export class UpdateCaissierComponent implements OnInit {
  confirm:FormGroup;
  currentCaissier = new Caissier();
  constructor(private activatedRoute: ActivatedRoute,
    private caissierService: CaissierService,
    private router :Router) { }

  ngOnInit(): void {
 
      this.confirm=new FormGroup({
        'matricule':new FormControl(null,Validators.required),
        'nom':new FormControl(null,Validators.required),
        'prenom':new FormControl(null,Validators.required),
        'adresse':new FormControl(null,Validators.required),
        'email':new FormControl(null,[Validators.required,Validators.email]),
            });

    this.caissierService.consulterCaissier(this.activatedRoute.snapshot.params.matricule).
 subscribe( cais =>{ this.currentCaissier = cais; } ) ;
  }

  modifierCaissier() {
    this.caissierService.updateCaissier(this.currentCaissier).subscribe(cais => {
    this.router.navigate(['/Caissier']);

    },(error) => { alert("Problème lors de la modification !"); }
    );
    }

}
