import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';

import { UserFacade } from '../../store/facades/user.facade';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private userFacade: UserFacade) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.userFacade.token$.pipe(
            take(1),
            map((token: string) => token ? { Authorization: `Bearer ${token}` } : {}),
            switchMap((headers: { [name: string]: string[] }) => next.handle(req.clone({ setHeaders: headers }))),
            catchError(error => this.handleAuthError(error))
        );
    }

    private handleAuthError(error: HttpErrorResponse): Observable<any> {
        if (error.status === 401 || error.status === 403) {
            this.userFacade.clear();
            return of(error.message);
        }

        return throwError(error);
    }
}
