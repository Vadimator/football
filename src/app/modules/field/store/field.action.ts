import { createAction, props } from '@ngrx/store';
import { FieldModel } from '@shared/models/field/field.model';

export const LoadCollection = createAction('[FieldActionTypes] Load Collection');
export const LoadCollectionSuccess = createAction(
    '[FieldActionTypes] Load Collection success',
    props<{ collection: FieldModel[] }>()
);
export const LoadCollectionFailed = createAction('[FieldActionTypes] Load Collection failed');

export const LoadSelected = createAction('[FieldActionTypes] Load selected', props<{ selectedId: number }>());
export const LoadSelectedSuccess = createAction('[FieldActionTypes] Load selected success', props<{ field: FieldModel }>());
export const LoadSelectedFailed = createAction('[FieldActionTypes] Load selected failed');
