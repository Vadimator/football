import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { MatchService } from '@shared/services/match.service';
import {
    LoadCollection,
    LoadCollectionFailed,
    LoadCollectionSuccess,
    LoadSelected,
    LoadSelectedFailed,
    LoadSelectedSuccess
} from './match.action';
import { IMatchListItem } from '@shared/models/match/match-list-item.model';

@Injectable()
export class MatchEffect {
    public loadCollection$ = createEffect(() => this.actions$.pipe(
        ofType(LoadCollection),
        exhaustMap(() => this.matchService
            .getList()
            .pipe(
                map((collection: IMatchListItem[]) => LoadCollectionSuccess({ collection })),
                catchError(() => of(LoadCollectionFailed))
            )
        )
    ));

    public loadSelected$ = createEffect(() => this.actions$.pipe(
        ofType(LoadSelected),
        map(action => action.selectedId),
        exhaustMap((selectedId: number) => this.matchService
            .getOneById(selectedId)
            .pipe(
                map((match) => LoadSelectedSuccess({ match })),
                catchError(() => of(LoadSelectedFailed))
            )
        )
    ));

    constructor(
        private actions$: Actions,
        private matchService: MatchService
    ) {}
}
