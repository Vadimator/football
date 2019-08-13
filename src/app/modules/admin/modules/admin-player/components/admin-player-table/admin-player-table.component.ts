import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

import { AdminTable } from '../../../../services/admin-table';

@Component({
    selector: 'app-admin-player-table',
    templateUrl: 'admin-player-table.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPlayerTableComponent extends AdminTable {
    @Output()
    public onChangeActive: EventEmitter<number> = new EventEmitter<number>();

    public displayedColumns: string[] = ['id', 'name', 'createdAt', 'action'];
}
