import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Agent } from 'src/app/Model/Agent';
import { AgentService } from 'src/app/service/agent.service';

@Component({
  selector: 'app-list-agent',
  templateUrl: './list-agent.component.html',
  styleUrls: ['./list-agent.component.scss'],
  providers: [MessageService]
})
export class ListAgentComponent implements OnInit {

  agents: Agent[];
  agent: Agent;
  display: boolean = false;
  ok: boolean = false;
  constructor(private agentService: AgentService, private router: Router,private messageService: MessageService) { }

  ngOnInit(): void {
    this.agentService.listeAgents().subscribe(agnt => {
      console.log(agnt);
      this.agents = agnt;
    });
  }

  DesactiverAgent(g: Agent) {

      this.agentService.desactiverAgent(g.idU).subscribe(() => {
        console.log("agent Désactiver");
      });
    this.messageService.add({key: 'myKey1',severity:'info', summary: 'Information', detail: 'Agent desactiver'});
    this.router.navigate(['/Agent']).then(() => {
      window.location.reload();
    }); 
  }

  ActiverAgent(g: Agent) {
   
      this.agentService.activerAgent(g.idU).subscribe(() => {
        console.log("agent Activer");
      });
   this.messageService.add({key: 'myKey1',severity:'info', summary: 'Information', detail: 'Agent activer'});
   this.router.navigate(['/Agent']).then(() => {
    window.location.reload();
  });

 }


  /*clickAlert(){
    this.display = false;
 }*/
 valider(){
  this.ok = true;
}


}
