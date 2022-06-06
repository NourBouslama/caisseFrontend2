import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from '../../model/agent.model';
import { AgentsServiceService } from '../../service/agents-service.service';

@Component({
  selector: 'app-ajouter-agent',
  templateUrl: './ajouter-agent.component.html',
  styleUrls: ['./ajouter-agent.component.scss']
})
export class AjouterAgentComponent implements OnInit {
  newAgent = new Agent();
  constructor(private agentService:AgentsServiceService,private router :Router)  { }

  ngOnInit(): void {
  }

  ajouterAgent(){
    this.agentService.ajouterAgent(this.newAgent)
    .subscribe(agt => {
    console.log(agt);
    });
    this.router.navigate(['/agents']);

  }
}
