import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IMatchItem } from '@shared/models/match/match-item.model';
import { IMatchListItem } from '@shared/models/match/match-list-item.model';
import { State } from './match.reducer';
import { getCollection, getIsLoading, getSelectedEntity } from './match.selector';
import { LoadCollection, LoadSelected } from './match.action';

@Injectable()
export class MatchFacade {
    public collection$: Observable<IMatchListItem[]>;
    public isLoading$: Observable<boolean>;
    public selectedEntity$: Observable<IMatchItem>;

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
