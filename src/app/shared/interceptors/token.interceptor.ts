import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

import { UserFacade } from '../../store/facades/user.facade';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private userFacade: UserFacade) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.userFacade.token$.pipe(
            take(1),
            switchMap((token: string) => next.handle(req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })))
        );
    }
}
