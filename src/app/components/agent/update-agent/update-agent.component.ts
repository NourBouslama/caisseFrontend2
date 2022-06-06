import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agent } from 'src/app/Model/Agent';
import { AgentService } from 'src/app/service/agent.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-agent',
  templateUrl: './update-agent.component.html',
  styleUrls: ['./update-agent.component.scss']
})
export class UpdateAgentComponent implements OnInit {
  confirm:FormGroup;
  currentAgent = new Agent();
    constructor(private activatedRoute: ActivatedRoute,
      private agentService: AgentService,
      private router :Router) { }

    ngOnInit(): void {
      this.confirm=new FormGroup({
        'matricule':new FormControl(null,Validators.required),
        'nom':new FormControl(null,Validators.required),
        'prenom':new FormControl(null,Validators.required),
        'adresse':new FormControl(null,Validators.required),
        'secteur':new FormControl(null,Validators.required),
        'email':new FormControl(null,[Validators.required,Validators.email]),
            });
            
      this.agentService.consulterAgent(this.activatedRoute.snapshot.params.matricule).
   subscribe( agt =>{ this.currentAgent = agt; } ) ;
    }

    modifierAgent() {
      this.agentService.updateAgent(this.currentAgent).subscribe(agt => {
      this.router.navigate(['/Agent']);
      },(error) => { alert("Problème lors de la modification !"); }
      );
      }

}
