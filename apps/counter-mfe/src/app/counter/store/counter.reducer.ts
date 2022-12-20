import {Action, createReducer, on} from '@ngrx/store';
import {CounterActions} from './counter.actions';
import {counterInitialState, CounterState} from './counter.state';

export const COUNTER_FEATURE_KEY = 'counter';

export const counterReducer = createReducer(
    counterInitialState,
    on(CounterActions.increment, (state) => {
        return {
            ...state,
            total: state.total + 1
        };
    }),
    on(CounterActions.decrement, (state) => {
        return {
            ...state,
            total: state.total - 1
        };
    }),
    on(CounterActions.reset, (state) => {
        return counterInitialState;
    })
);

export function reducer(state: CounterState | undefined, action: Action) {
    return counterReducer(state, action);
}
