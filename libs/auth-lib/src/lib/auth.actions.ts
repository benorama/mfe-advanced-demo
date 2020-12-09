import {Action} from '@ngrx/store';

export namespace AuthActions {

    export const Types = {
        LOGIN: '[User] Login',
        LOGOFF: '[User] Logoff'
    };

    export class LoginAction implements Action {
        payload: string;
        readonly type = Types.LOGIN;

        constructor(userName: string) {
            this.payload = userName;
        }
    }

  export class LogoffAction implements Action {
    payload: string;
    readonly type = Types.LOGOFF;

    constructor(userName: string) {
      this.payload = userName;
    }
  }

    export type Actions =
        LogoffAction
        | LoginAction;
}


