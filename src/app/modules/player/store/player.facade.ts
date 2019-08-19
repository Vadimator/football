import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IPlayerItem } from '@shared/models/player/player-item.model';
import { IPlayerListItem } from '@shared/models/player/player-list-item.model';
import { LoadCollection, LoadSelected } from './player.action';
import { State } from './player.reducer';
import { getCollection, getIsLoading, getSelectedEntity } from './player.selector';

@Injectable()
export class PlayerFacade {
    public collection$: Observable<IPlayerListItem[]>;
    public isLoading$: Observable<boolean>;
    public selectedEntity$: Observable<IPlayerItem>;

    constructor(private store$: Store<State>) {
        this.collection$ = this.store$.pipe(select(getCollection));
        this.isLoading$ = this.store$.pipe(select(getIsLoading));
        this.selectedEntity$ = this.store$.pipe(select(getSelectedEntity));
    }

    loadCollection(): void {
        this.store$.dispatch(LoadCollection());
    }

    loadSelectedEntity(selectedId: number): void {
        this.store$.dispatch(LoadSelected({ selectedId }));
    }
}
