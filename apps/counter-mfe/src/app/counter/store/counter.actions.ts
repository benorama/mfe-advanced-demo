import {createActionGroup, emptyProps} from '@ngrx/store';

export const CounterActions = createActionGroup({
    source: 'Counter',
    events: {
        'Increment': emptyProps(),
        'Increment Success': emptyProps(),
        'Decrement': emptyProps(),
        'Reset': emptyProps(),
        'Reset Success': emptyProps(),
    },
});
