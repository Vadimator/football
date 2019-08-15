import { Action, ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';

import * as fromUser from './user.reducer';

export interface State {
    user: fromUser.UserState;
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<State, Action>>('Root reducers token', {
    factory: () => ({
        user: fromUser.reducer
    })
});
