import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';

import {COUNTER_FEATURE_KEY, counterReducer} from './counter.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(
            COUNTER_FEATURE_KEY,
            counterReducer
        )
    ],
})
export class CounterStoreModule {
}
