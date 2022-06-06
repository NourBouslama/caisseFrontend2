import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Caisse } from 'src/app/Model/Caisse';
import { ModePaiement } from 'src/app/Model/ModePaiement';
import { CaisseService } from 'src/app/service/caisse.service';
import { ModeService } from 'src/app/service/mode.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-caisse',
  templateUrl: './update-caisse.component.html',
  styleUrls: ['./update-caisse.component.scss']
})
export class UpdateCaisseComponent implements OnInit {
  confirm:FormGroup;
  modesPaiement: any = [];
  currentCaisse = new Caisse();
  modes: ModePaiement[];

  constructor(private activatedRoute: ActivatedRoute, private caisseService: CaisseService, private modeService: ModeService, private router: Router) { }

  ngOnInit(): void {
    this.confirm=new FormGroup({
      'numero':new FormControl(null,Validators.required),
      'intitule':new FormControl(null,Validators.required),
      'mode':new FormControl(null,Validators.required),
          });
    this.onSelectMode();
  }
  onSelectMode() {
    this.caisseService.consulterCaisse(this.activatedRoute.snapshot.params.id).
      subscribe(cai => { this.currentCaisse = cai; });
    this.modeService.listerModePaiementParEtat("active").subscribe(response => {
      console.log(response)
      this.modesPaiement = response;
    });
  }
  updateCaisse() {
    this.caisseService.updateCaisse(this.currentCaisse).subscribe(cai => {
      this.router.navigate(['/Caisse']);
    }, (error) => { alert("Problème lors de la modification !"); }
    );
  }

}
