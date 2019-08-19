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
