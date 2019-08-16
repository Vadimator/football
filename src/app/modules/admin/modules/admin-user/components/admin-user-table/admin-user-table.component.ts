import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdminTable } from '../../../../services/admin-table';

@Component({
    selector: 'app-admin-user-table',
    templateUrl: 'admin-user-table.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminUserTableComponent extends AdminTable {
    public displayedColumns: string[] = ['id', 'name', 'createdAt', 'action'];
}
