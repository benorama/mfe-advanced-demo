import {Routes} from '@angular/router';

import {AuthGuard} from '@demo/auth-lib';

import {HomeComponent} from './home/home.component';

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
        // Lazy loaded remote module
        loadChildren: () => import('counter-remote/counter-route.module').then((m) => m.CounterRouteModule),
        canActivate: [AuthGuard],
    },
];
