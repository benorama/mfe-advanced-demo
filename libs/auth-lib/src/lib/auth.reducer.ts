import {Action, createReducer, on} from '@ngrx/store';
import {initialUserState, AuthState} from './auth.state';
import * as AuthActions from './auth.actions';
import {loginSuccess} from "./auth.actions";

export const AUTH_FEATURE_KEY: string = 'auth';

const authReducer = createReducer(
    initialUserState,
    on(AuthActions.loginSuccess, (state, action) => ({
        ...state,
        authenticated: true,
        name: action.userName
    })),
    on(AuthActions.logoff, state => ({
        ...state,
        authenticated: false,
        name: ''
    }))
);

export function reducer(state: AuthState | undefined, action: Action) {
    return authReducer(state, action);
}
