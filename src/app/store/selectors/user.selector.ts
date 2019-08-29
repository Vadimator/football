import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from '../reducers';
import { UserState } from '../reducers/user.reducer';
import { UserModel } from '@shared/models/user/user.model';

export const getUserState = createFeatureSelector<State, UserState>('user');
export const getToken = createSelector(
    getUserState,
    (state: UserState) => state.token
);
export const getUser = createSelector(
    getUserState,
    (state: UserState) => state.user
);
export const getMessage = createSelector(
    getUserState,
    (state: UserState) => state.message
);
export const getIsLoading = createSelector(
    getUserState,
    (state: UserState) => state.isLoading
);
export const getRole = createSelector(
    getUser,
    (user: UserModel) => user.role
);
