import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModePaiement } from 'src/app/Model/ModePaiement';
import { ModeService } from 'src/app/service/mode.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-mode',
  templateUrl: './add-mode.component.html',
  styleUrls: ['./add-mode.component.scss']
})
export class AddModeComponent implements OnInit {
  confirm:FormGroup;
  newMode = new ModePaiement();
    constructor(private modeService: ModeService, private router: Router) {}

  ngOnInit(): void {
    this.confirm=new FormGroup({
      'libelle':new FormControl(null,Validators.required),

          });
  }

  addMode(){
    this.modeService.ajouterMode(this.newMode)
    .subscribe(mo => {
    console.log(mo);
    });
    this.router.navigate(['/ModePaiement']).then(() => {
      window.location.reload();
    });
    
  }

}
