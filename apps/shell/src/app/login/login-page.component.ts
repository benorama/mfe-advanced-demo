import {Component} from '@angular/core';

import {Store} from '@ngrx/store';

import {AuthActions} from '../store/auth.actions';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

    constructor(private store: Store<any>) {}

    login(userName) {
        this.store.dispatch(new AuthActions.LoginAction(userName));
        return false;
    }

}
