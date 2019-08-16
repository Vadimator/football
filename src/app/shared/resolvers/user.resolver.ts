import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '@shared/services/user.service';
import { UserModel } from '@shared/models/user/user.model';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<any> {
    constructor(private userService: UserService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<UserModel> {
        return this.userService.getOneById(route.params.id);
    }
}
