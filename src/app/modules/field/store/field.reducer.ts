import { Action, createReducer, on } from '@ngrx/store';

import { FieldModel } from '@shared/models/field/field.model';
import {
    LoadCollection,
    LoadCollectionFailed,
    LoadCollectionSuccess,
    LoadSelected,
    LoadSelectedFailed,
    LoadSelectedSuccess
} from './field.action';
import * as fromRoot from '../../../store/reducers';

export interface FieldState {
    isLoading: boolean;
    collection: FieldModel[];
    selectedEntity: FieldModel;
}

export interface State extends fromRoot.State {
    field: FieldState;
}

export const initialState: FieldState = {
    isLoading: false,
    collection: [],
    selectedEntity: null
};

export function reducer(fieldState: FieldState | undefined, action: Action) {
    return createReducer(
        initialState,
        on(LoadCollection, (state: FieldState) => ({ ...state, isLoading: true })),
        on(LoadCollectionSuccess, (state: FieldState, { collection }) => ({ ...state, isLoading: false, collection })),
        on(LoadCollectionFailed, (state: FieldState) => ({ ...state, isLoading: false, collection: [] })),

        on(LoadSelected, (state: FieldState) => ({ ...state, isLoading: true })),
        on(LoadSelectedSuccess, (state: FieldState, { field }) => ({
            ...state,
            isLoading: false,
            selectedEntity: field
        })),
        on(LoadSelectedFailed, (state: FieldState) => ({ ...state, isLoading: false, selectedEntity: null }))
    )(fieldState, action);
}
