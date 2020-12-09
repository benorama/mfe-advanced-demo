import {Action} from '@ngrx/store';

export namespace CounterActions {

    export const Types = {
        INCREMENT: '[Counter] Increment',
        DECREMENT: '[Counter] Decrement',
        RESET: '[Counter] Reset'
    };

    export class IncrementAction implements Action {
        readonly type = Types.INCREMENT;

        constructor() {}
    }

    export class DecrementAction implements Action {
        readonly type = Types.DECREMENT;

        constructor() {}
    }

    export class ResetAction implements Action {
        readonly type = Types.RESET;

        constructor() {}
    }

    export type Actions =
        IncrementAction
        | DecrementAction
        | ResetAction;


}

