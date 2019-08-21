import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mapTo, tap, withLatestFrom } from 'rxjs/operators';

import { PlayerService } from '@shared/services/player.service';
import { IPlayerListItem } from '@shared/models/player/player-list-item.model';
import { IPlayerItem } from '@shared/models/player/player-item.model';
import {
    ChangePage,
    ChangeSort,
    LoadCollection,
    LoadCollectionFailed,
    LoadCollectionSuccess,
    LoadSelected,
    LoadSelectedFailed,
    LoadSelectedSuccess
} from './player.action';
import { PlayerFacade } from './player.facade';

@Injectable()
export class PlayerEffect {
    public loadCollection$ = createEffect(() => this.actions$.pipe(
        ofType(LoadCollection),
        withLatestFrom(
            this.playerFacade.page$,
            this.playerFacade.limit$,
            this.playerFacade.sort$,
            this.playerFacade.direction$,
            (_, page, limit, sort, direction) => ({ page, limit, sort, direction })),
        exhaustMap(({ page, limit, sort, direction }) => this.playerService
            .getListStatistic(page, limit, sort, direction)
            .pipe(
                map(({ entities, count }) => LoadCollectionSuccess({ entities, count })),
                catchError(() => of(LoadCollectionFailed()))
            )
        )
    ));

    public loadSelected$ = createEffect(() => this.actions$.pipe(
        ofType(LoadSelected),
        map(action => action.selectedId),
        exhaustMap((selectedId: number) => this.playerService
            .getOneById(selectedId)
            .pipe(
                map((player: IPlayerItem) => LoadSelectedSuccess({ player })),
                catchError(() => of(LoadSelectedFailed()))
            )
        )
    ));

    public changeSort$ = createEffect(() => this.actions$.pipe(
        ofType(ChangeSort, ChangePage),
        mapTo(LoadCollection())
    ));

    public loadSelectedFailed$ = createEffect(() => this.actions$.pipe(
        ofType(LoadSelectedFailed),
        tap(() => this.router.navigate(['/page-not-found']))
    ), { dispatch: false });

    constructor(
        private actions$: Actions,
        private router: Router,
        private playerFacade: PlayerFacade,
        private playerService: PlayerService
    ) {}
}
