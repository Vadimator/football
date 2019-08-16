import { Action, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import { localStorageSync } from 'ngrx-store-localstorage';

import { environment } from '../../../environments/environment';
import * as fromUser from './user.reducer';

export interface State {
    user: fromUser.UserState;
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<State, Action>>('Root reducers token', {
    factory: () => ({
        user: fromUser.reducer
    })
});

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({ keys: ['user'], rehydrate: true })(reducer);
}

export const metaReducers: MetaReducer<State>[] = !environment.production
    ? [localStorageSyncReducer]
    : [localStorageSyncReducer];
