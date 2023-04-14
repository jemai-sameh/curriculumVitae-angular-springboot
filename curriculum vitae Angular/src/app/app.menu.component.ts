import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { AuthService } from './service/auth.service';

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
role:any
    constructor(public appMain: AppMainComponent,public authService:AuthService) { }

    ngOnInit() {
        this.role=this.authService.getRole()
console.log(this.role)
//if (this.role==1){
        this.model = [
            
            {
                label: 'Home',
                items:[
                    {label: 'Dashboard',icon: 'pi pi-fw pi-home', routerLink: ['/']}
                ]
            },
            {
                label: 'UI Components',
                items: [
                    
                    
                    {label: 'Competence', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/competence']},
                    {label: 'Formation', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/formation']},
                    {label: 'Langue', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/langue']},
                    {label: 'Experience', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/experience']},
                    {label: 'Contact', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/contact']},
                    {label: 'CV', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/cv']}
                ]
            },
            
            
           
           
           
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
