import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModePaiement } from 'src/app/Model/ModePaiement';
import { ModeService } from 'src/app/service/mode.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-mode',
  templateUrl: './update-mode.component.html',
  styleUrls: ['./update-mode.component.scss']
})
export class UpdateModeComponent implements OnInit {
  confirm:FormGroup;
  currentMode = new ModePaiement();
  constructor(private activatedRoute: ActivatedRoute,private modeService: ModeService,private router :Router) 
  { }

  ngOnInit(): void {
    this.confirm=new FormGroup({
      'libelle':new FormControl(null,Validators.required),

          });
    this.modeService.consulterMode(this.activatedRoute.snapshot.params.id).
    subscribe( mo =>{ this.currentMode = mo; } ) ;
  }
  updateMode() {
    this.modeService.updateMode(this.currentMode).subscribe(mo => {
    this.router.navigate(['/ModePaiement']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    }
}
