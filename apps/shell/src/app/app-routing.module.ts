import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },
    /*{
        path: 'auth',
        component: AuthPageComponent,
    },
    {
        path: 'counter',
        component: CounterPageComponent,
    },*/
    /*{
        path: 'todo',
        loadChildren: () =>
            import('mfe1/TodoModule').then((m) => {
                return m.TodoModule;
            }),
    },*/
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
