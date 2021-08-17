import {createAction, props} from '@ngrx/store';

export const login = createAction(
    '[Auth] Login',
    props<{ userName: string }>()
);
export const loginSuccess = createAction(
    '[Auth] Login success',
    props<{ userName: string }>()
);
export const logoff = createAction('[Auth] Logoff');


