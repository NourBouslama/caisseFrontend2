import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { AuthentifierService } from './service/connection.service';

@Component({
    selector: 'app-menu',
    template: `
        <div class="layout-menu-container">
            <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
                <li app-menu class="layout-menuitem-category" *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true" role="none">
                    <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">{{item.label}}</div>
                    <ul role="menu">
                        <li app-menuitem *ngFor="let child of item.items" [item]="child" [index]="i" role="none"></li>
                    </ul>
                </li>
            
            </ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];
    stateAdmin:boolean=false;
    stateCaissier:boolean=false;

    constructor(public appMain: AppMainComponent,public authService: AuthentifierService) { }

    ngOnInit() {
        if(this.authService.isAdmin()){
            this.stateAdmin=true;
        }
        if(this.authService.isCaissier()){
            this.stateCaissier=true;
        }
        this.model = [
            {
                label: 'Home',
                items:[
                    {label: 'Acceuil',icon: 'pi pi-fw pi-home', routerLink: ['acceuil'],visible:this.stateAdmin},
                    {label: 'Acceuil',icon: 'pi pi-fw pi-home', routerLink: ['acceuil-caissier'],visible:this.stateCaissier}
                ]
            },
            {
                label: 'Gestion :',
    
                    items: [
                        {label: 'ModePaiement', icon: 'pi pi-fw pi-money-bill', routerLink: ['ModePaiement'],visible:this.stateAdmin},
                        {label: 'Caisse', icon: 'pi pi-fw pi-wallet', routerLink: ['Caisse'],visible:this.stateAdmin},
                        {label: 'Caissier', icon: 'pi pi-fw pi-user', routerLink: ['Caissier'],visible:this.stateAdmin},
                        {label: 'Agent', icon: 'pi pi-fw pi-user', routerLink: ['Agent'],visible:this.stateAdmin},

                        {label: 'Sessions de caisses', icon: 'pi pi-fw pi-id-card', routerLink: ['/session'],visible:this.stateCaissier},
                        {label: 'Paiement', icon: 'pi pi-fw pi-money-bill', routerLink: ['/ChercherFacture'],visible:this.stateCaissier},
                        {label: 'Annuler paiement', icon: 'pi pi-fw pi-ban', routerLink: ['/annulerPaiement'],visible:this.stateCaissier},
                        {label: 'Historique des paiements', icon: 'pi pi-fw pi-list', routerLink: ['/historiquePaiement'],visible:this.stateCaissier},
                        {label: 'Saisir avance', icon: 'pi pi-fw pi-plus', routerLink: ['/saisirAvance'],visible:this.stateCaissier},
    
                    ]
                }
              
            
        
        ];
    }

    onKeydown(event: KeyboardEvent) {
        const nodeElement = (<HTMLDivElement> event.target);
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
