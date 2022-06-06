import { Agent } from '../../model/agent.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AgentsServiceService } from '../../service/agents-service.service';


@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {

  agents : Agent[];
    agent:Agent;
    constructor(  private agentService: AgentsServiceService,private router :Router) { }

    ngOnInit(): void {
      this.agentService.listeAgents().subscribe(agnt => {
      console.log(agnt);
      this.agents = agnt;
      });
    }
 
  DesactiverAgent(g: Agent)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.agentService.desactiverAgent(g.matricule).subscribe(() => {
  console.log("agent Désactiver");
  });
  this.router.navigate(['/agents']).then(() => {
  window.location.reload();
  });
  }

  ActiverAgent(g: Agent)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.agentService.activerAgent(g.matricule).subscribe(() => {
  console.log("agent Activer");
  });
  this.router.navigate(['/agents']).then(() => {
  window.location.reload();
  });
  }


}
