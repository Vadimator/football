import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserFacade } from '../../../store/facades/user.facade';

@Injectable()
export class AdminAuthGuard implements CanActivate {
    constructor(private userFacade: UserFacade, private router: Router) {}

    canActivate(): Observable<boolean> {
        return this.userFacade.token$.pipe(
            map((token: string) => {
                if (!token) {
                    this.router.navigate(['/admin', 'login']);
                    return false;
                } else {
                    return true;
                }
            })
        );
    }
}
