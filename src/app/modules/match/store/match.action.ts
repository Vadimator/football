import { createAction, props } from '@ngrx/store';
import { IMatchListItem } from '@shared/models/match/match-list-item.model';
import { IMatchItem } from '@shared/models/match/match-item.model';

export const LoadCollection = createAction('[MatchActionTypes] Load Collection');
export const LoadCollectionSuccess = createAction('[MatchActionTypes] Load Collection success', props<{ collection: IMatchListItem[] }>());
export const LoadCollectionFailed = createAction('[MatchActionTypes] Load Collection failed');

export const LoadSelected = createAction('[MatchActionTypes] Load selected', props<{ selectedId: number }>());
export const LoadSelectedSuccess = createAction('[MatchActionTypes] Load selected success', props<{ match: IMatchItem }>());
export const LoadSelectedFailed = createAction('[MatchActionTypes] Load selected failed');
