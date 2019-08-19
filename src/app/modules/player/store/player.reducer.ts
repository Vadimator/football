import { Action, createReducer, on } from '@ngrx/store';

import { IPlayerListItem } from '@shared/models/player/player-list-item.model';
import { IPlayerItem } from '@shared/models/player/player-item.model';
import {
    LoadCollection,
    LoadCollectionFailed,
    LoadCollectionSuccess,
    LoadSelected,
    LoadSelectedFailed,
    LoadSelectedSuccess
} from './player.action';
import * as fromRoot from '../../../store/reducers';

export interface PlayerState {
    isLoading: boolean;
    collection: IPlayerListItem[];
    selectedEntity: IPlayerItem;
}

export interface State extends fromRoot.State {
    player: PlayerState;
}

export const initialState: PlayerState = {
    isLoading: false,
    collection: [],
    selectedEntity: null
};

export function reducer(playerState: PlayerState | undefined, action: Action) {
    return createReducer(
        initialState,
        on(LoadCollection, (state: PlayerState) => ({ ...state, isLoading: true })),
        on(LoadCollectionSuccess, (state: PlayerState, { collection }) => ({ ...state, isLoading: false, collection })),
        on(LoadCollectionFailed, (state: PlayerState) => ({ ...state, isLoading: false, collection: [] })),

        on(LoadSelected, (state: PlayerState) => ({ ...state, isLoading: true })),
        on(LoadSelectedSuccess, (state: PlayerState, { player }) => ({
            ...state,
            isLoading: false,
            selectedEntity: player
        })),
        on(LoadSelectedFailed, (state: PlayerState) => ({ ...state, isLoading: false, selectedEntity: null }))
    )(playerState, action);
}
