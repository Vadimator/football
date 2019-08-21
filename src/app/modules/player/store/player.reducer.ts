import { Action, createReducer, on } from '@ngrx/store';
import { SortDirection } from '@angular/material';

import { IPlayerItem } from '@shared/models/player/player-item.model';
import { IPlayerListItem } from '@shared/models/player/player-list-item.model';
import {
    ChangePage,
    ChangeSort,
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
    page: number;
    limit: number;
    sort: string;
    direction: SortDirection;
    count: number;
}

export interface State extends fromRoot.State {
    player: PlayerState;
}

export const initialState: PlayerState = {
    isLoading: false,
    collection: [],
    selectedEntity: null,
    page: 0,
    limit: 10,
    sort: 'id',
    direction: 'asc',
    count: 0
};

export function reducer(playerState: PlayerState | undefined, action: Action) {
    return createReducer(
        initialState,
        on(LoadCollection, (state: PlayerState) => ({ ...state, isLoading: true })),
        on(LoadCollectionSuccess, (state: PlayerState, { entities, count }) => ({
            ...state,
            isLoading: false,
            collection: entities,
            count
        })),
        on(LoadCollectionFailed, (state: PlayerState) => ({ ...state, isLoading: false, collection: [] })),

        on(LoadSelected, (state: PlayerState) => ({ ...state, isLoading: true })),
        on(LoadSelectedSuccess, (state: PlayerState, { player }) => ({
            ...state,
            isLoading: false,
            selectedEntity: player
        })),
        on(LoadSelectedFailed, (state: PlayerState) => ({ ...state, isLoading: false, selectedEntity: null })),

        on(ChangeSort, (state: PlayerState, { sort, direction }) => ({ ...state, sort, direction })),
        on(ChangePage, (state: PlayerState, { page }) => ({ ...state, page}))
    )(playerState, action);
}
