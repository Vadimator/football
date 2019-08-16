import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';

import { MatchFacade } from '../store/match.facade';

@Injectable()
export class MatchGuard implements CanActivate {
    constructor(private matchFacade: MatchFacade) {}

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        return this.getFromStoreOrAPI(+route.params.id)
            .pipe(
                switchMap(() => of(true)),
                catchError(() => of(false))
            );
    }

    private getFromStoreOrAPI(selectedId: number): Observable<any> {
        return this.matchFacade.isLoading$.pipe(
            tap((isLoading: boolean) => {
                if (!isLoading) {
                    this.matchFacade.loadSelectedEntity(selectedId);
                }
            }),
            filter((isLoading: boolean) => isLoading),
            take(1)
        );
    }
}
