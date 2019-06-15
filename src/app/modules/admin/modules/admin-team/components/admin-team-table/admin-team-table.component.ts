import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AdminTable } from 'src/app/modules/admin/services/admin-table';

@Component({
  selector: 'app-admin-team-table',
  templateUrl: './admin-team-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminTeamTableComponent extends AdminTable {
  public displayedColumns: string[] = ['id', 'players', 'createdAt', 'action'];
}
