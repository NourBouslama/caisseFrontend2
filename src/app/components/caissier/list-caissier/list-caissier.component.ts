import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Caissier } from 'src/app/Model/Caissier';
import { CaissierService } from 'src/app/service/caissier.service';

@Component({
  selector: 'app-list-caissier',
  templateUrl: './list-caissier.component.html',
  styleUrls: ['./list-caissier.component.scss'],
  providers: [MessageService]
})
export class ListCaissierComponent implements OnInit {

  caissiers : Caissier[];
  caissier:Caissier;
  constructor(private caissierService: CaissierService,private router :Router,private messageService: MessageService) { }

  ngOnInit(): void {
    this.caissierService.listeCaissiers().subscribe(cais => {
    console.log(cais);
    this.caissiers = cais;

    });
  }

  DesactiverCaissier(c: Caissier)
{

this.caissierService.desactiverCaissier(c.idU).subscribe(() => {
console.log("caissier Désactiver");
});
this.messageService.add({key: 'myKey1',severity:'info', summary: 'Information', detail: 'Caissier desactiver'});

this.router.navigate(['/Caissier']).then(() => {
window.location.reload();
});
}

ActiverCaissier(c: Caissier)
{

this.caissierService.activerCaissier(c.idU).subscribe(() => {
console.log("caissier Activer");
});
this.messageService.add({key: 'myKey1',severity:'info', summary: 'Information', detail: 'Caissier activer'});

this.router.navigate(['/Caissier']).then(() => {
window.location.reload();
});
}

}
