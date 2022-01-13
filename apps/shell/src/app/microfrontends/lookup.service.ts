import {Injectable} from '@angular/core';
import {AuthGuard} from '@demo/auth-lib';
import {Microfrontend} from './microfrontend';
import {environment} from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<Microfrontend[]> {
        return Promise.resolve([
            {
                // For Loading
                type: 'module',
                remoteEntry: environment.counterRemoteEntryUrl,
                exposedModule: './Module',

                // For Routing
                routePath: 'counter',
                routeCanActivate: [AuthGuard],
                ngModuleName: 'CounterRouteModule'
            },
            // Add other MFE routes here
        ] as Microfrontend[]);
    }
}
