import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-player-list-item',
    templateUrl: 'player-list-item.component.html',
    styleUrls: ['player-list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PlayerListItemComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
