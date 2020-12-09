import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {LoginPageComponent} from './login-page.component';
import {LOGIN_ROUTES} from './login.routes';

@NgModule({
    declarations: [LoginPageComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(LOGIN_ROUTES),
    ]
})
export class LoginRouteModule {
}
