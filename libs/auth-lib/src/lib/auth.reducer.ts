import {AuthActions} from './auth.actions';
import {initialUserState, AuthState} from './auth.state';

export const AUTH_FEATURE_KEY: string = 'auth';

export function authReducer(state = initialUserState, action: any): AuthState {
    switch (action.type) {

        case AuthActions.Types.LOGIN:
            return Object.assign({}, state, {
                authenticated: true,
                name: action.payload
            });

      case AuthActions.Types.LOGOFF:
        return Object.assign({}, state, {
          authenticated: false,
          name: ''
        });

        default: {
            return state;
        }
    }
}
