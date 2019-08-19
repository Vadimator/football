import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import { PlayerService } from '@shared/services/player.service';
import { IPlayerListItem } from '@shared/models/player/player-list-item.model';
import { IPlayerItem } from '@shared/models/player/player-item.model';
import {
    LoadCollection,
    LoadCollectionFailed,
    LoadCollectionSuccess,
    LoadSelected,
    LoadSelectedFailed,
    LoadSelectedSuccess
} from './player.action';

@Injectable()
export class PlayerEffect {
    public loadCollection$ = createEffect(() => this.actions$.pipe(
        ofType(LoadCollection),
        exhaustMap(() => this.playerService
            .getList()
            .pipe(
                map((collection: IPlayerListItem[]) => LoadCollectionSuccess({ collection })),
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

    public loadSelectedFailed$ = createEffect(() => this.actions$.pipe(
        ofType(LoadSelectedFailed),
        tap(() => this.router.navigate(['/page-not-found']))
    ), { dispatch: false });

    constructor(
        private actions$: Actions,
        private router: Router,
        private playerService: PlayerService
    ) {}
}
