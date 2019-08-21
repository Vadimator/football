import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SortDirection } from '@angular/material';

import { IPlayerItem } from '@shared/models/player/player-item.model';
import { IPlayerListItem } from '@shared/models/player/player-list-item.model';
import { ChangePage, ChangeSort, LoadCollection, LoadSelected } from './player.action';
import { State } from './player.reducer';
import {
    getCollection, getCount,
    getDirection,
    getIsLoading,
    getLimit,
    getPage,
    getSelectedEntity,
    getSort
} from './player.selector';

@Injectable()
export class PlayerFacade {
    public collection$: Observable<IPlayerListItem[]>;
    public isLoading$: Observable<boolean>;
    public selectedEntity$: Observable<IPlayerItem>;
    public page$: Observable<number>;
    public limit$: Observable<number>;
    public sort$: Observable<string>;
    public direction$: Observable<SortDirection>;
    public count$: Observable<number>;

    constructor(private store$: Store<State>) {
        this.collection$ = this.store$.pipe(select(getCollection));
        this.isLoading$ = this.store$.pipe(select(getIsLoading));
        this.selectedEntity$ = this.store$.pipe(select(getSelectedEntity));
        this.page$ = this.store$.pipe(select(getPage));
        this.limit$ = this.store$.pipe(select(getLimit));
        this.sort$ = this.store$.pipe(select(getSort));
        this.direction$ = this.store$.pipe(select(getDirection));
        this.count$ = this.store$.pipe(select(getCount));
    }

    loadCollection(): void {
        this.store$.dispatch(LoadCollection());
    }

    loadSelectedEntity(selectedId: number): void {
        this.store$.dispatch(LoadSelected({ selectedId }));
    }

    changePage(page: number): void {
        this.store$.dispatch(ChangePage({ page }));
    }

    changeSort(sort: string, direction: SortDirection): void {
        this.store$.dispatch(ChangeSort({ sort, direction }));
    }
}
