export interface AuthState {
    authenticated: boolean;
    name: string;
}

export let initialUserState: AuthState = {
    authenticated: false,
    name: ''
};
