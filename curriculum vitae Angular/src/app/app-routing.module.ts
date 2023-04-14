import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MediaComponent } from './components/media/media.component';

import { AppMainComponent } from './app.main.component';


import { LoginComponent } from './components/login/login.component';





import { CompetenceComponent } from './components/competence/competence.component';
import { ContactComponent } from './contact/contact.component';
import { FormationComponent } from './formation/formation.component';
import { LangueComponent } from './langue/langue.component';
import { ExperienceComponent } from './experience/experience.component';
import { CVComponent } from './cv/cv.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    
                    {path: 'uikit/media', component: MediaComponent},
                    {path: 'uikit/menu', loadChildren: () => import('./components/menus/menus.module').then(m => m.MenusModule)},
                   
                    
                   
                   

                    {path: 'uikit/competence', component:CompetenceComponent},
                    {path: 'uikit/contact', component:ContactComponent},
                    {path: 'uikit/formation', component:FormationComponent},
                    {path: 'uikit/langue', component:LangueComponent},
                    {path: 'uikit/experience', component:ExperienceComponent},
                    {path: 'uikit/cv', component:CVComponent},
                ],
            },
            
            {path:'login', component: LoginComponent},
        
           
            
            {path: '**', redirectTo: 'pages/notfound'},
        ], {scrollPositionRestoration: 'enabled', anchorScrolling:'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
