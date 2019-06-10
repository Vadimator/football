import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AdminTable } from '../../../../services/admin-table';

@Component({
    selector: 'app-admin-field-table',
    templateUrl: './admin-field-table.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminFieldTableComponent extends AdminTable {
    public displayedColumns: string[] = ['id', 'name', 'address', 'website', 'pricePerMinute', 'action'];
}
