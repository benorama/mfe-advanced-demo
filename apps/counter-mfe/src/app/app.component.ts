import {Component, HostBinding} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    @HostBinding('attr.class') class = 'h-100 w-100 d-flex mx-auto';

}
