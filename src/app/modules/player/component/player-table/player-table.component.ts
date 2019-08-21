import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Sort } from '@angular/material';

import { IPlayerListItem } from '@shared/models/player/player-list-item.model';

@Component({
    selector: 'app-player-table',
    templateUrl: 'player-table.component.html',
    styleUrls: ['player-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerTableComponent {
    @Input()
    public players: IPlayerListItem[] = [];

    @Output()
    public changeSort: EventEmitter<Sort> = new EventEmitter<Sort>();

    public displayedColumns: string[] = ['name', 'win', 'lose', 'matches', 'goals'];
}
