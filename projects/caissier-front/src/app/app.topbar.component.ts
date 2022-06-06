import { Component, OnDestroy } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { AuthentifierService } from './service/authentifier.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    isLoggedin : boolean ;
    items: MenuItem[];

    constructor(public appMain: AppMainComponent,public authService: AuthentifierService,private router: Router) { }
    ngOnInit () {
        this.authService.loadToken();
        if (this.authService.getToken()==null || 
            this.authService.isTokenExpired())
              this.router.navigate(['/login']);

              this.items = [
               /* {
                    label:'login',
                    icon:'pi pi-power-off',
                    routerLink: ['connection'],
                },*/

                {
                    label:'logout',
                    icon:'pi pi-sign-out',
                    command: (event) => {
                       this.onLogout();
                    }}

               
            ];
    }

             
      
      
      onLogout(){
        this.authService.logout();
      }
}
