import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, tap} from 'rxjs/operators';
import * as fromAuth from '@demo/auth-lib';

@Injectable()
export class AppEffects {

    constructor(private actions$: Actions,
                private router: Router) {}

    // Here we would do some HTTP API requests
    login$ = createEffect(() => this.actions$.pipe(
        ofType(fromAuth.login),
        map((action) => fromAuth.loginSuccess({userName: action.userName}))
    ));


    loginSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(fromAuth.loginSuccess),
        tap((action) => {
            this.router.navigate(['/counter']);
        })
    ), { dispatch: false });

}
