import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {CounterPageComponent} from './counter-page.component';
import {CounterStoreModule} from "./store/counter-store.module";

@NgModule({
    declarations: [CounterPageComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: CounterPageComponent,
            },
        ]),
        CounterStoreModule
    ],
    exports: [
        CounterPageComponent
    ]
})
export class CounterRouteModule {
}
