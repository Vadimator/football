import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-player-item',
    templateUrl: 'player-item.component.html',
    styleUrls: ['player-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerItemComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
