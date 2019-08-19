import { Action, createReducer, on } from '@ngrx/store';

import {
    LoadCollection,
    LoadCollectionFailed,
    LoadCollectionSuccess,
    LoadSelected,
    LoadSelectedFailed,
    LoadSelectedSuccess
} from './match.action';
import * as fromRoot from '../../../store/reducers';

export interface MatchState {
    isLoading: boolean;
    collection: [];
    selectedEntity: any;
}

export interface State extends fromRoot.State {
    match: MatchState;
}

export const initialState: MatchState = {
    isLoading: false,
    collection: [],
    selectedEntity: null
};

const matchReducer = createReducer(
    initialState,
    on(LoadCollection, (state: MatchState) => ({ ...state, isLoading: true })),
    on(LoadCollectionSuccess, (state: MatchState, { collection }) => ({ ...state, isLoading: false, collection })),
    on(LoadCollectionFailed, (state: MatchState) => ({ ...state, isLoading: false, collection: [] })),

    on(LoadSelected, (state: MatchState) => ({ ...state, isLoading: true })),
    on(LoadSelectedSuccess, (state: MatchState, { match }) => ({ ...state, isLoading: false, selectedEntity: match })),
    on(LoadSelectedFailed, (state: MatchState) => ({ ...state, isLoading: false, selectedEntity: null })),
);

export function reducer(state: MatchState | undefined, action: Action) {
    return matchReducer(state, action);
}
