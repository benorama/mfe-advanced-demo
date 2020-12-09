import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {tap} from 'rxjs/operators';
import {AuthActions} from '@demo/auth-lib';

@Injectable()
export class AppEffects {

    constructor(private actions$: Actions,
                private router: Router) {}

    @Effect({dispatch: false}) authLogin$ = this.actions$.pipe(
        ofType(AuthActions.Types.LOGIN),
        tap((action: AuthActions.LoginAction) => {
            this.router.navigate(['/counter']);
        })
    );

}
