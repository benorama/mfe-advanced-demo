import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {tap} from 'rxjs/operators';
import {AuthActions} from './store/auth.actions';

@Injectable()
export class AppEffects {

    constructor(private actions$: Actions,
                private router: Router) {}

    @Effect({dispatch: false}) authLogin$ = this.actions$.pipe(
        ofType(AuthActions.Types.LOGIN),
        tap((action: AuthActions.LoginAction) => {
            console.log('auth login effect');
            this.router.navigate(['/counter']);
        })
    );

}
