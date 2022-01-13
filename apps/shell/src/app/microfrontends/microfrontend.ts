import {LoadRemoteModuleOptions} from '@angular-architects/module-federation';

export type Microfrontend = LoadRemoteModuleOptions & {
    routePath: string;
    routeCanActivate: any[];
    ngModuleName: string;
};
