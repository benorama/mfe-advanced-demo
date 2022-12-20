import {Routes} from '@angular/router';
import {loadRemoteModule} from '@angular-architects/module-federation';

import {HomeComponent} from './home/home.component';
import {environment} from "../environments/environment";
import {AuthGuard} from "@demo/auth-lib";

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },
    {
        path: 'login',
        // Lazy loaded local module
        loadChildren: () => import('./login/login-route.module').then(m => m.LoginRouteModule)
    },
    {
        path: 'counter',
        canActivate: [AuthGuard],
        loadChildren: () =>  loadRemoteModule({
            type: 'manifest',
            remoteName: 'counter-mfe',
            exposedModule: './Module'
        }).then(m => m.CounterRouteModule)
    },
];
