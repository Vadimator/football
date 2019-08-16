import { createAction, props } from '@ngrx/store';

export const LoadCollection = createAction('[MatchActionTypes] Load Collection');
export const LoadCollectionSuccess = createAction('[MatchActionTypes] Load Collection success', props<{ collection: [] }>());
export const LoadCollectionFailed = createAction('[MatchActionTypes] Load Collection failed');

export const LoadSelected = createAction('[MatchActionTypes] Load selected', props<{ selectedId: number }>());
export const LoadSelectedSuccess = createAction('[MatchActionTypes] Load selected success', props<{ match: any }>());
export const LoadSelectedFailed = createAction('[MatchActionTypes] Load selected failed');
