import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AdminTable } from '../../../../services/admin-table';

@Component({
    selector: 'app-admin-match-table',
    templateUrl: './admin-match-table.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminMatchTableComponent extends AdminTable {
    public displayedColumns: string[] = ['id', 'duration', 'score', 'createdAt', 'action'];
}
