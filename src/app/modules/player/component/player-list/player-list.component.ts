import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-player-list',
    templateUrl: 'player-list.component.html',
    styleUrls: ['player-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerListComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
