import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from './match.reducer';
import { getCollection, getIsLoading } from './match.selector';
import { LoadCollection } from './match.action';

@Injectable()
export class MatchFacade {
    public collection$: Observable<[]>;
    public isLoading$: Observable<boolean>;

    constructor(private store$: Store<State>) {
        this.collection$ = this.store$.pipe(select(getCollection));
        this.isLoading$ = this.store$.pipe(select(getIsLoading));
    }

    loadCollection(): void {
        this.store$.dispatch(LoadCollection());
    }
}
