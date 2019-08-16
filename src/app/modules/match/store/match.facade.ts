import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from './match.reducer';
import { getCollection, getIsLoading, getSelectedEntity } from './match.selector';
import { LoadCollection, LoadSelected } from './match.action';

@Injectable()
export class MatchFacade {
    public collection$: Observable<[]>;
    public isLoading$: Observable<boolean>;
    public selectedEntity$: Observable<any>;

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
