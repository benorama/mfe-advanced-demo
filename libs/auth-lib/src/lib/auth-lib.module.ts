import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from '@ngrx/store';

import * as fromAuth from './auth.reducer';
import {AuthEffects} from "./auth.effects";
import {AuthGuard} from './auth.guard';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(
            fromAuth.AUTH_FEATURE_KEY,
            fromAuth.reducer
        ),
        EffectsModule.forFeature([
            AuthEffects,
        ])
    ],
    providers: [
        AuthGuard
    ]
})
export class AuthLibModule {
}
