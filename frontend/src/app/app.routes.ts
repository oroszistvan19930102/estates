import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {   path: 'login', 
        component: LoginComponent,
    },
    {   path: 'home', 
        component: HomeComponent, 
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
    }/* ,
    {   path: '**', 
        redirectTo: 'login', 
        title: 'Unknown paths'
    } // Handle unknown paths */
];

export default routes;
