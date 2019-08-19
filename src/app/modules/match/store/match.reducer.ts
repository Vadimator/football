import { Action, createReducer, on } from '@ngrx/store';

import { IMatchListItem } from '@shared/models/match/match-list-item.model';
import { IMatchItem } from '@shared/models/match/match-item.model';
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
    collection: IMatchListItem[];
    selectedEntity: IMatchItem;
}

export interface State extends fromRoot.State {
    match: MatchState;
}

export const initialState: MatchState = {
    isLoading: false,
    collection: [],
    selectedEntity: null
};

export function reducer(matchState: MatchState | undefined, action: Action) {
    return createReducer(
        initialState,
        on(LoadCollection, (state: MatchState) => ({ ...state, isLoading: true })),
        on(LoadCollectionSuccess, (state: MatchState, { collection }) => ({ ...state, isLoading: false, collection })),
        on(LoadCollectionFailed, (state: MatchState) => ({ ...state, isLoading: false, collection: [] })),

        on(LoadSelected, (state: MatchState) => ({ ...state, isLoading: true })),
        on(LoadSelectedSuccess, (state: MatchState, { match }) => ({
            ...state,
            isLoading: false,
            selectedEntity: match
        })),
        on(LoadSelectedFailed, (state: MatchState) => ({ ...state, isLoading: false, selectedEntity: null }))
    )(matchState, action);
}
