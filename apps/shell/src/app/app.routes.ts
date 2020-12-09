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
        loadChildren: () => import('./login/login-route.module').then(m => m.LoginRouteModule)
    },
    {
        path: 'counter',
        loadChildren: () => import('./counter/counter-route.module').then(m => m.CounterRouteModule),
        canActivate: [AuthGuard],
    },
    /*{
        path: 'todo',
        loadChildren: () =>
            import('mfe1/TodoModule').then((m) => {
                return m.TodoModule;
            }),
    },*/
];
