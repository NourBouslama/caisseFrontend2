import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Caisse } from 'src/app/Model/Caisse';
import { CaisseService } from 'src/app/service/caisse.service';

@Component({
  selector: 'app-caisse',
  templateUrl: './ListerCaisse.component.html',
  styleUrls: ['./caisse.component.scss'],
  providers: [MessageService]
})
export class ListerCaisseComponent implements OnInit {
  caisse: Caisse;
  caisses: Caisse[];
  constructor(private caisseService: CaisseService, private router: Router,private messageService: MessageService) { }

  ngOnInit(): void {

    this.caisseService.listeCaisses().subscribe(cai => {
      console.log(cai);
      this.caisses = cai;  

    });
  }
  desactiverCaisse(p: Caisse) {
    
      this.caisseService.DesactiverCaisse(p.idC).subscribe(() => {
        console.log("caisse desactivé");
      });
      this.messageService.add({key: 'myKey1',severity:'info', summary: 'Information', detail: 'Caisse desactiver'});

    this.router.navigate(['/Caisse']).then(() => {
      window.location.reload();
    });
  }

  activerCaisse(p: Caisse) {
    
      this.caisseService.ActiverCaisse(p.idC).subscribe(() => {
        console.log("caisse activé");
      });
      this.messageService.add({key: 'myKey1',severity:'info', summary: 'Information', detail: 'Caisse activer'});

    this.router.navigate(['/Caisse']).then(() => {
      window.location.reload();
    });
  }
}
