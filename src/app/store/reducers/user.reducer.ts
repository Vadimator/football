import { createReducer, on } from '@ngrx/store';

import { UserModel } from '@shared/models/user/user.model';
import { TokenModel } from '@shared/models/user/token.model';
import { Login, LoginFailed, LoginSuccess, Register, RegisterFailed, RegisterSuccess } from '../actions/user.action';

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
    on(Login, Register, (state: UserState) => ({ ...state, isLoading: true, message: null })),
    on(LoginSuccess, RegisterSuccess, (state, payload: TokenModel) => {
        const { token, ...user } = payload;

        return {
            ...state,
            user,
            token,
            isLoading: false,
            message: null
        };
    }),
    on(LoginFailed, RegisterFailed, (state: UserState, { message }) => ({ ...state, message, isLoading: false }))
);
