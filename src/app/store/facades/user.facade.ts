import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UserModel } from '@shared/models/user/user.model';
import { getToken, getUser } from '../selectors/user.selector';
import { State } from '../reducers';
import { Login } from '../actions/user.action';

@Injectable({ providedIn: 'root' })
export class UserFacade {
    public token$: Observable<string>;
    public user$: Observable<UserModel>;

    constructor(private store: Store<State>) {
        this.token$ = this.store.pipe(select(getToken));
        this.user$ = this.store.pipe(select(getUser));
    }

    login(username: string, password: string): void {
        this.store.dispatch(Login({ username, password }));
    }
}
