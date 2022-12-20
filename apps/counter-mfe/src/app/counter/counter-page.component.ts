import {Component} from '@angular/core';

import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {CounterActions} from './store/counter.actions';
import {CounterState} from './store/counter.state';
import {COUNTER_FEATURE_KEY} from './store/counter.reducer';

@Component({
    selector: 'app-counter-page',
    templateUrl: './counter-page.component.html',
    styleUrls: ['./counter-page.component.scss']
})
export class CounterPageComponent {

    counter$: Observable<CounterState>;

    constructor(private store: Store<any>) {
        this.counter$ = this.store.pipe(select(COUNTER_FEATURE_KEY));
    }

    decrement() {
        this.store.dispatch(CounterActions.decrement());
    }

    increment() {
        this.store.dispatch(CounterActions.increment());
    }

    reset() {
        this.store.dispatch(CounterActions.reset());
    }

}
