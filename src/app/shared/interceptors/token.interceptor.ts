import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

import { UserFacade } from '../../store/facades/user.facade';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private userFacade: UserFacade) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.userFacade.token$.pipe(
            take(1),
            map((token: string) => token ? { Authorization: `Bearer ${token}` } : {}),
            switchMap((headers: { [name: string]: string[] }) => next.handle(req.clone({ setHeaders: headers })))
        );
    }
}
