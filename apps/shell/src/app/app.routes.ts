import {Routes} from '@angular/router';
import {loadRemoteModule} from '@angular-architects/module-federation';
import {Microfrontend} from "./microfrontends/microfrontend";

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
    }
];

export function buildRoutes(options: Microfrontend[]): Routes {

    const lazyRoutes: Routes = options.map(o => ({
        canActivate: o.routeCanActivate,
        path: o.routePath,
        loadChildren: () => loadRemoteModule(o).then(m => m[o.ngModuleName])
    }));

    return [...APP_ROUTES, ...lazyRoutes];
}
