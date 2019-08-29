import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UserModel } from '@shared/models/user/user.model';
import { RoleType } from '@shared/types/role.type';
import { getIsLoading, getMessage, getRole, getToken, getUser } from '../selectors/user.selector';
import { State } from '../reducers';
import { Login, Clear, Register } from '../actions/user.action';

@Injectable({ providedIn: 'root' })
export class UserFacade {
    public token$: Observable<string>;
    public user$: Observable<UserModel>;
    public message$: Observable<string>;
    public isLoading$: Observable<boolean>;
    public role$: Observable<RoleType>;

    constructor(private store$: Store<State>) {
        this.token$ = this.store$.pipe(select(getToken));
        this.user$ = this.store$.pipe(select(getUser));
        this.message$ = this.store$.pipe(select(getMessage));
        this.isLoading$ = this.store$.pipe(select(getIsLoading));
        this.role$ = this.store$.pipe(select(getRole));
    }

    login(username: string, password: string): void {
        this.store$.dispatch(Login({ username, password }));
    }

    register(username: string, password: string, role: RoleType): void {
        this.store$.dispatch(Register({ username, password, role }));
    }

    clear(): void {
        this.store$.dispatch(Clear());
    }
}
