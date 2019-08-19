import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FieldState, State } from './field.reducer';

export const getMatchState = createFeatureSelector<State, FieldState>('field');
export const getCollection = createSelector(
    getMatchState,
    (state: FieldState) => state.collection
);
export const getIsLoading = createSelector(
    getMatchState,
    (state: FieldState) => state.isLoading
);
export const getSelectedEntity = createSelector(
    getMatchState,
    (state: FieldState) => state.selectedEntity
);
