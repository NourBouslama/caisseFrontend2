import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agent } from 'src/app/model/agent.model';
import { AgentsServiceService } from 'src/app/service/agents-service.service';

@Component({
  selector: 'app-modifier-agent',
  templateUrl: './modifier-agent.component.html',
  styleUrls: ['./modifier-agent.component.scss']
})
export class ModifierAgentComponent implements OnInit {

    currentAgent = new Agent();
    constructor(private activatedRoute: ActivatedRoute,
      private agentService: AgentsServiceService,
      private router :Router) { }

    ngOnInit(): void {
      this.agentService.consulterAgent(this.activatedRoute.snapshot.params.matricule).
   subscribe( agt =>{ this.currentAgent = agt; } ) ;
    }

    modifierAgent() {
      this.agentService.updateAgent(this.currentAgent).subscribe(agt => {
      this.router.navigate(['/agents']);
      },(error) => { alert("Problème lors de la modification !"); }
      );
      }}
