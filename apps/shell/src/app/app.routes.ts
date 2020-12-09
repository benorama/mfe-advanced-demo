import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './store/auth.guard';

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
        // Lazy loaded local module
        loadChildren: () => import('./counter/counter-route.module').then(m => m.CounterRouteModule),
        canActivate: [AuthGuard],
    },
    /*{
        path: 'counter',
        // Lazy loaded federated module
        loadChildren: () => import('counter/CounterRouteModule').then((m) => m.CounterRouteModule),
        canActivate: [AuthGuard],
    },*/
];
