import { createAction, props } from '@ngrx/store';

export const LoadCollection = createAction('[MatchActionTypes] Load Collection');
export const LoadCollectionSuccess = createAction('[MatchActionTypes] Load Collection success', props<{ collection: [] }>());
export const LoadCollectionFailed = createAction('[MatchActionTypes] Load Collection failed');
