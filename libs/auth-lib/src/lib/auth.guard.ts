import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngrx/store';
import {map} from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private store: Store<any>,
                private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) {
        return this.store.select(s => s.auth.authenticated).pipe(map(authenticated => {
            if (authenticated) {
                return true;
            } else {
                return this.router.parseUrl('/login');
            }
        }));
    }
}
