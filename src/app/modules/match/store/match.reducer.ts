import { createReducer, on } from '@ngrx/store';
import { LoadCollection, LoadCollectionFailed, LoadCollectionSuccess } from './match.action';
import * as fromRoot from '../../../store/reducers';

export interface MatchState {
    isLoading: boolean;
    collection: [];
}

export interface State extends fromRoot.State {
    match: MatchState;
}

export const initialState: MatchState = {
    isLoading: false,
    collection: []
};

export const reducer = createReducer(
    initialState,
    on(LoadCollection, (state: MatchState) => ({ ...state, isLoading: true })),
    on(LoadCollectionSuccess, (state: MatchState, { collection }) => ({ ...state, isLoading: false, collection })),
    on(LoadCollectionFailed, (state: MatchState) => ({ ...state, isLoading: false, collection: [] }))
);
