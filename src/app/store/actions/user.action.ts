import { createAction, props } from '@ngrx/store';
import { TokenModel } from '@shared/models/user/token.model';
import { RoleType } from '@shared/types/role.type';

export const Login = createAction('[AuthActionTypes] Login', props<{ username: string; password: string }>());
export const LoginSuccess = createAction('[AuthActionTypes] Login success', props<TokenModel>());
export const LoginFailed = createAction('[AuthActionTypes] Login failed', props<{ message: string }>());

export const Register = createAction('[AuthActionTypes] Register', props<{ username: string; password: string, role: RoleType }>());
export const RegisterSuccess = createAction('[AuthActionTypes] Register success', props<TokenModel>());
export const RegisterFailed = createAction('[AuthActionTypes] Register failed', props<{ message: string }>());

export const Clear = createAction('[AuthActionTypes] Clear');
