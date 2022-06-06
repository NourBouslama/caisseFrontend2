import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Caissier } from 'src/app/Model/Caissier';
import { Role } from 'src/app/Model/Role';
import { CaissierService } from 'src/app/service/caissier.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-caissier',
  templateUrl: './add-caissier.component.html',
  styleUrls: ['./add-caissier.component.scss']
})
export class AddCaissierComponent implements OnInit {
  confirm:FormGroup;
  newCaissier = new Caissier();
  r=new Role(2,"caissier");
  constructor(private caissierService:CaissierService,private router :Router)  { }

  ngOnInit(): void {
    this.confirm=new FormGroup({
      'matricule':new FormControl(null,Validators.required),
      'nom':new FormControl(null,Validators.required),
      'prenom':new FormControl(null,Validators.required),
      'adresse':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'motdp':new FormControl(null,Validators.required),

          });
  }

  ajouterCaissier(){
    this.newCaissier.role=this.r;
    this.caissierService.ajouterCaissier(this.newCaissier)
    .subscribe(agt => {
    console.log(agt);
    });
    this.router.navigate(['/Caissier']).then(() => {
      window.location.reload();
      });
  }

}
