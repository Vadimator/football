import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { State } from './field.reducer';
import { getCollection, getIsLoading, getSelectedEntity } from './field.selector';
import { LoadCollection, LoadSelected } from './field.action';
import { FieldModel } from '@shared/models/field/field.model';

@Injectable()
export class FieldFacade {
    public collection$: Observable<FieldModel[]>;
    public isLoading$: Observable<boolean>;
    public selectedEntity$: Observable<FieldModel>;

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
