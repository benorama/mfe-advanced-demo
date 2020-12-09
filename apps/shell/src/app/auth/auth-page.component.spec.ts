import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AuthPageComponent} from './auth-page.component';

describe('AuthRouteComponent', () => {
    let component: AuthPageComponent;
    let fixture: ComponentFixture<AuthPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AuthPageComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
