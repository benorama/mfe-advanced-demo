import {Component, HostBinding} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {

    @HostBinding('attr.class') class = 'h-100 w-100 d-flex mx-auto';

    /*auth$: Observable<AuthState>;

    constructor(private store: Store<any>) {
        this.auth$ = this.store.pipe(select(AUTH_FEATURE_KEY));
    }*/

}
