import { createReducer, on } from '@ngrx/store';

import { UserModel } from '@shared/models/user/user.model';
import { TokenModel } from '@shared/models/user/token.model';
import { Login, LoginFailed, LoginSuccess } from '../actions/user.action';

export interface UserState {
    token: string;
    user: UserModel;
    message: string;
    isLoading: boolean;
}

export const initialState: UserState = {
    token: null,
    user: null,
    message: null,
    isLoading: false
};

export const reducer = createReducer(
    initialState,
    on(Login, (state: UserState) => ({ ...state, isLoading: true })),
    on(LoginSuccess, (state, payload: TokenModel) => {
        const { token, ...user } = payload;

        return {
            ...state,
            user,
            token,
            isLoading: false,
            message: null
        };
    }),
    on(LoginFailed, (state: UserState, { message }) => ({ ...state, message, isLoading: false }))
);
