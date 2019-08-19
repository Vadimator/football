import { createAction, props } from '@ngrx/store';
import { IPlayerListItem } from '@shared/models/player/player-list-item.model';
import { IPlayerItem } from '@shared/models/player/player-item.model';

export const LoadCollection = createAction('[PlayerActionTypes] Load Collection');
export const LoadCollectionSuccess = createAction(
    '[PlayerActionTypes] Load Collection success',
    props<{ collection: IPlayerListItem[] }>()
);
export const LoadCollectionFailed = createAction('[PlayerActionTypes] Load Collection failed');

export const LoadSelected = createAction('[PlayerActionTypes] Load selected', props<{ selectedId: number }>());
export const LoadSelectedSuccess = createAction('[PlayerActionTypes] Load selected success', props<{ player: IPlayerItem }>());
export const LoadSelectedFailed = createAction('[PlayerActionTypes] Load selected failed');
