import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';

import { TeamService } from '@shared/services/team.service';
import { AdminCrud } from '../../../../../admin/services/admin-crud';

@Component({
  selector: 'app-admin-team',
  templateUrl: './admin-team.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminTeamComponent extends AdminCrud<any> {
  constructor(protected dialog: MatDialog, private teamService: TeamService) {
    super(dialog);
  }

  protected getCollection(): Observable<any[]> {
    return this.teamService.getList();
  }

  protected removeOneById(matchId: number): Observable<any> {
    return this.teamService.removeOneById(matchId);
  }
}
