import {CounterActions} from './counter.actions';
import {CounterState, initialCounterState} from './counter.state';

export const COUNTER_FEATURE_KEY: string = 'counter';

export function counterReducer(state = initialCounterState, action: CounterActions.Actions): CounterState {
    switch (action.type) {

        case CounterActions.Types.INCREMENT:
            return {
                ...state,
                total: state.total + 1
            };

        case CounterActions.Types.DECREMENT:
            return {
                ...state,
                total: state.total - 1
            };

        case CounterActions.Types.RESET:
            return initialCounterState;


        default: {
            return state;
        }
    }
}
