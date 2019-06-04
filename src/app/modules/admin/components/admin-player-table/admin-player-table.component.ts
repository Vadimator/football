import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PlayerService } from '../../../../shared/services/player.service';

@Component({
    selector: 'app-admin-player-table',
    templateUrl: 'admin-player-table.component.html',
    styleUrls: ['admin-player-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPlayerTableComponent implements OnInit {
    public displayedColumns: string[] = ['id', 'name', 'createdAt', 'action'];
    public players$: Observable<any[]>;

    constructor(private playerService: PlayerService) {}

    ngOnInit() {
        this.players$ = this.playerService.getList();
    }
}

