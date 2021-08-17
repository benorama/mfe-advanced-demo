import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';

import * as fromCounter from './counter.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(
            fromCounter.COUNTER_FEATURE_KEY,
            fromCounter.reducer
        )
    ],
})
export class CounterStoreModule {
}
