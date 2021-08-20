import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map} from 'rxjs/operators';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions) {
    }

    // Here we would do some HTTP API requests
    login$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.login),
        map((action) => AuthActions.loginSuccess({userName: action.userName}))
    ));

}
