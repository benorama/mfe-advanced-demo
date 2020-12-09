import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';

import {AUTH_FEATURE_KEY, authReducer} from './auth.reducer';
import {AuthGuard} from './auth.guard';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(
            AUTH_FEATURE_KEY,
            authReducer
        ),
    ],
    providers: [
        AuthGuard
    ]
})
export class AuthStoreModule {
}
