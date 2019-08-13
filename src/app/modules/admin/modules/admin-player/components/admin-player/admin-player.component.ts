import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { PlayerService } from '@shared/services/player.service';
import { AdminCrud } from '../../../../services/admin-crud';

@Component({
    selector: 'app-admin-player',
    templateUrl: 'admin-player.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPlayerComponent extends AdminCrud<any> {
    constructor(protected dialog: MatDialog, private playerService: PlayerService) {
        super(dialog);
    }

    onChangeActive(playerId: number): void {
        this.playerService.changeActive(playerId)
            .pipe(untilDestroyed(this))
            .subscribe();
    }

    protected getCollection(): Observable<any[]> {
        return this.playerService.getList();
    }

    protected removeOneById(matchId: number): Observable<any> {
        return this.playerService.removeOneById(matchId);
    }
}
