import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from '@ngrx/store';

import * as fromCounter from './counter.reducer';
import {CounterEffects} from './counter.effects';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(
            fromCounter.COUNTER_FEATURE_KEY,
            fromCounter.reducer
        ),
        EffectsModule.forFeature([
            CounterEffects
        ])
    ],
})
export class CounterStoreModule {
}
