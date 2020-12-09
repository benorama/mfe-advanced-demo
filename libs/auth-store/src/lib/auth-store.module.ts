import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {AUTH_FEATURE_KEY, authReducer} from './auth.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(
            AUTH_FEATURE_KEY,
            authReducer
        ),
    ],
})
export class AuthStoreModule {
}
