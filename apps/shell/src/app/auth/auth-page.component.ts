import {Component} from '@angular/core';
import {Store} from '@ngrx/store';

import {AuthActions} from '@nx-federated-workspace/auth-store';

@Component({
    selector: 'app-auth-page',
    templateUrl: './auth-page.component.html',
    styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent {

    constructor(private store: Store<any>) {}

    login(userName) {
        this.store.dispatch(new AuthActions.LoginAction(userName));
        return false;
    }

}
