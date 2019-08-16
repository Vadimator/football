import { createFeatureSelector, createSelector } from '@ngrx/store';

import { MatchState, State } from './match.reducer';

export const getMatchState = createFeatureSelector<State, MatchState>('match');
export const getCollection = createSelector(
    getMatchState,
    (state: MatchState) => state.collection
);
export const getIsLoading = createSelector(
    getMatchState,
    (state: MatchState) => state.isLoading
);
