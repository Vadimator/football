import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers';
import { TokenModel } from '@shared/models/user/token.model';

export const getUserState = createFeatureSelector<State, TokenModel>('user');
export const getToken = createSelector(
    getUserState,
    (state: TokenModel) => state.token
);
export const getUser = createSelector(
    getUserState,
    (state: TokenModel) => {
        const { token, ...result } = state;
        return result;
    }
);

