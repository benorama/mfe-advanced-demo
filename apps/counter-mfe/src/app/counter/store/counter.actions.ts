import {createAction} from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const incrementSucccess = createAction('[Counter] Increment success');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');
