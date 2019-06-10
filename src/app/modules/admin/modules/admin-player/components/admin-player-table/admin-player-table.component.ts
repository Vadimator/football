import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AdminTable } from '../../../../services/admin-table';

@Component({
    selector: 'app-admin-player-table',
    templateUrl: 'admin-player-table.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPlayerTableComponent extends AdminTable {
    public displayedColumns: string[] = ['id', 'name', 'createdAt', 'action'];
}
