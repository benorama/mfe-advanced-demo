import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map} from 'rxjs/operators';
import {CounterActions} from './counter.actions';

@Injectable()
export class CounterEffects {

    constructor(private actions$: Actions) {
    }

    // Simple effect to test effects in mfe
    login$ = createEffect(() => this.actions$.pipe(
        ofType(CounterActions.increment),
        map((action) => CounterActions.incrementSuccess())
    ));

}
