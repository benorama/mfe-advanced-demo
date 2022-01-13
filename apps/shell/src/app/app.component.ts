import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LookupService} from './microfrontends/lookup.service';
import {Microfrontend} from './microfrontends/microfrontend';
import {buildRoutes} from './app.routes';

import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {AUTH_FEATURE_KEY, AuthState} from '@demo/auth-lib';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {


    @HostBinding('attr.class') class = 'h-100 w-100 d-flex mx-auto';

    auth$: Observable<AuthState>;
    microfrontends: Microfrontend[] = [];

    constructor(private store: Store<any>,
                private router: Router,
                private lookupService: LookupService) {
        this.auth$ = this.store.pipe(select(AUTH_FEATURE_KEY));
    }

    async ngOnInit(): Promise<void> {
        this.microfrontends = await this.lookupService.lookup();
        const routes = buildRoutes(this.microfrontends);
        this.router.resetConfig(routes);
    }

}
