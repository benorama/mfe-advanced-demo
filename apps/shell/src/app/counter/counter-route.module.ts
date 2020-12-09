import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {CounterPageComponent} from './counter-page.component';
import {CounterStoreModule} from './store/counter-store.module';
import {COUNTER_ROUTES} from './counter.routes';

@NgModule({
    declarations: [CounterPageComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(COUNTER_ROUTES),
        CounterStoreModule
    ]
})
export class CounterRouteModule {
}
