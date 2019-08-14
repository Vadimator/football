import { createAction, props } from '@ngrx/store';
import { TokenModel } from '@shared/models/user/token.model';

export const Login = createAction('[AuthActionTypes] Login', props<{ username: string; password: string }>());
export const LoginSuccess = createAction('[AuthActionTypes] Login success', props<TokenModel>());
export const LoginFailed = createAction('[AuthActionTypes] Login failed');
