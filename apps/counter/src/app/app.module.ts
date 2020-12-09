import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {CounterRouteModule} from './counter/counter-route.module';
import {StoreModule} from "@ngrx/store";
import {environment} from "../../../shell/src/environments/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot([], {initialNavigation: 'enabled'}),
        StoreModule.forRoot({}),
        !environment.production ? StoreDevtoolsModule.instrument({maxAge: 25}) : [],
        // Local modules
        CounterRouteModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
