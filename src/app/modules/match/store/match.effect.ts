import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { MatchService } from '@shared/services/match.service';
import { LoadCollection, LoadCollectionFailed, LoadCollectionSuccess } from './match.action';

@Injectable()
export class MatchEffect {
    public loadCollection$ = createEffect(() => this.actions$.pipe(
        ofType(LoadCollection),
        exhaustMap(() => this.matchService
            .getList()
            .pipe(
                map((collection: []) => LoadCollectionSuccess({ collection })),
                catchError(() => of(LoadCollectionFailed))
            )
        )
    ));

    constructor(
        private actions$: Actions,
        private matchService: MatchService
    ) {}
}
