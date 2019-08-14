import { createReducer, on } from '@ngrx/store';
import { TokenModel } from '@shared/models/user/token.model';
import { LoginSuccess } from '../actions/user.action';

export const initialState: TokenModel = new TokenModel();

export const reducer = createReducer(
    initialState,
    on(LoginSuccess, (state, payload) => ({ ...state, ...payload }))
);
