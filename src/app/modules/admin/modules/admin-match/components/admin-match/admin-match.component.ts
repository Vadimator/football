import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';

import { MatchService } from '@shared/services/match.service';
import { AdminCrud } from '../../../../services/admin-crud';

@Component({
  selector: 'app-admin-match',
  templateUrl: './admin-match.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminMatchComponent extends AdminCrud<any> {
  constructor(protected dialog: MatDialog, private matchService: MatchService) {
    super(dialog);
  }

  protected getCollection(): Observable<any[]> {
    return this.matchService.getList();
  }

  protected removeOneById(matchId: number): Observable<any> {
    return this.matchService.removeOneById(matchId);
  }
}
