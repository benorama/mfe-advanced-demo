import {Action, createReducer, on} from '@ngrx/store';
import {CounterState, initialCounterState} from './counter.state';
import * as CounterActions from './counter.actions';

export const COUNTER_FEATURE_KEY: string = 'counter';

const counterReducer = createReducer(
    initialCounterState,
    on(CounterActions.increment, (state, action) => ({
        ...state,
        total: state.total + 1
    })),
    on(CounterActions.decrement, state => ({
        ...state,
        total: state.total - 1
    })),
    on(CounterActions.reset, state => (
        initialCounterState
    ))
);

export function reducer(state: CounterState | undefined, action: Action) {
    return counterReducer(state, action);
}
