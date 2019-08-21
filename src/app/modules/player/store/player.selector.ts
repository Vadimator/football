import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlayerState, State } from './player.reducer';

export const getMatchState = createFeatureSelector<State, PlayerState>('player');
export const getCollection = createSelector(
    getMatchState,
    (state: PlayerState) => state.collection
);
export const getIsLoading = createSelector(
    getMatchState,
    (state: PlayerState) => state.isLoading
);
export const getSelectedEntity = createSelector(
    getMatchState,
    (state: PlayerState) => state.selectedEntity
);
export const getPage =  createSelector(
    getMatchState,
    (state: PlayerState) => state.page
);
export const getLimit =  createSelector(
    getMatchState,
    (state: PlayerState) => state.limit
);
export const getSort = createSelector(
    getMatchState,
    (state: PlayerState) => state.sort
);
export const getDirection =  createSelector(
    getMatchState,
    (state: PlayerState) => state.direction
);
export const getCount =  createSelector(
    getMatchState,
    (state: PlayerState) => state.count
);
export const getIsShowPaginator =  createSelector(
    getMatchState,
    (state: PlayerState) => state.count > state.limit
);

