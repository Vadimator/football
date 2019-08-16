import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';

import { UserModel } from '@shared/models/user/user.model';
import { UserService } from '@shared/services/user.service';
import { AdminCrud } from '../../../../services/admin-crud';

@Component({
    selector: 'app-admin-user',
    templateUrl: 'admin-user.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminUserComponent  extends AdminCrud<UserModel> {
    constructor(protected dialog: MatDialog, private userService: UserService) {
        super(dialog);
    }

    protected getCollection(): Observable<any[]> {
        return this.userService.getList();
    }

    protected removeOneById(matchId: number): Observable<any> {
        return this.userService.removeOneById(matchId);
    }
}
