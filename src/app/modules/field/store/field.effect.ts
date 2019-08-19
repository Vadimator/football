import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import { FieldModel } from '@shared/models/field/field.model';
import { FieldService } from '@shared/services/field.service';
import {
    LoadCollection,
    LoadCollectionFailed,
    LoadCollectionSuccess,
    LoadSelected,
    LoadSelectedFailed,
    LoadSelectedSuccess
} from './field.action';

@Injectable()
export class FieldEffect {
    public loadCollection$ = createEffect(() => this.actions$.pipe(
        ofType(LoadCollection),
        exhaustMap(() => this.fieldService
            .getList()
            .pipe(
                map((collection: FieldModel[]) => LoadCollectionSuccess({ collection })),
                catchError(() => of(LoadCollectionFailed()))
            )
        )
    ));

    public loadSelected$ = createEffect(() => this.actions$.pipe(
        ofType(LoadSelected),
        map(action => action.selectedId),
        exhaustMap((selectedId: number) => this.fieldService
            .getOneById(selectedId)
            .pipe(
                map((field: FieldModel) => LoadSelectedSuccess({ field })),
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
        private fieldService: FieldService
    ) {
    }
}
