import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Agent } from 'src/app/model/agent.model';
import { AgentsServiceService } from 'src/app/service/agents-service.service';

@Component({
  selector: 'app-consulter-agent',
  templateUrl: './consulter-agent.component.html',
  styleUrls: ['./consulter-agent.component.scss']
})
export class ConsulterAgentComponent implements OnInit {

    currentAgent = new Agent();
    constructor(private activatedRoute: ActivatedRoute,
      private agentService: AgentsServiceService) { }

    ngOnInit(): void {
      this.agentService.consulterAgent(this.activatedRoute.snapshot.params.matricule).
   subscribe( agt =>{ this.currentAgent = agt; } ) ;
    }
}
