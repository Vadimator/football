import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import { UserService } from '@shared/services/user.service';
import { TokenModel } from '@shared/models/user/token.model';
import { Login, LoginFailed, LoginSuccess } from '../actions/user.action';

@Injectable()
export class UserEffect {
    public login$ = createEffect(() => this.actions$.pipe(
        ofType(Login),
        map(action => ({ username: action.username, password: action.password })),
        exhaustMap(({ username, password }) => this.userService
            .login(username, password)
            .pipe(
                map((user: TokenModel) => LoginSuccess(user)),
                catchError((error: HttpErrorResponse) => of(LoginFailed({ message: error.error.message })))
            )
        )
    ));

    public loginSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(LoginSuccess),
        tap(() => this.router.navigate(['/admin']))
    ), { dispatch: false });

    constructor(
        private actions$: Actions,
        private router: Router,
        private userService: UserService
    ) {
    }
}
