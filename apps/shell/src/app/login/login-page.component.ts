import {Component} from '@angular/core';

import {Store} from '@ngrx/store';

import {login} from '@demo/auth-lib';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

    constructor(private store: Store<any>) {}

    login(userName: string) {
        this.store.dispatch(login({userName}));
        return false;
    }

}
