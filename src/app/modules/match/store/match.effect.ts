import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import { MatchService } from '@shared/services/match.service';
import { IMatchListItem } from '@shared/models/match/match-list-item.model';
import { IMatchItem } from '@shared/models/match/match-item.model';
import {
    LoadCollection,
    LoadCollectionFailed,
    LoadCollectionSuccess,
    LoadSelected,
    LoadSelectedFailed,
    LoadSelectedSuccess
} from './match.action';

@Injectable()
export class MatchEffect {
    public loadCollection$ = createEffect(() => this.actions$.pipe(
        ofType(LoadCollection),
        exhaustMap(() => this.matchService
            .getList()
            .pipe(
                map((collection: IMatchListItem[]) => LoadCollectionSuccess({ collection })),
                catchError(() => of(LoadCollectionFailed()))
            )
        )
    ));

    public loadSelected$ = createEffect(() => this.actions$.pipe(
        ofType(LoadSelected),
        map(action => action.selectedId),
        exhaustMap((selectedId: number) => this.matchService
            .getOneById(selectedId)
            .pipe(
                map((match: IMatchItem) => LoadSelectedSuccess({ match })),
                catchError(() => of(LoadSelectedFailed()))
            )
        )
    ));

    public loadSelectedFailed$ = createEffect(() => this.actions$.pipe(
        ofType(LoadSelectedFailed),
        tap(() => this.router.navigate(['/page-not-found']))
    ), { dispatch: false });

    constructor(
        private actions$: Actions,
        private router: Router,
        private matchService: MatchService
    ) {}
}
