import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {AuthPageComponent} from './auth-page.component';

@NgModule({
    declarations: [AuthPageComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: AuthPageComponent,
            },
        ]),
    ],
    exports: [
        AuthPageComponent
    ]
})
export class AuthRouteModule {
}
