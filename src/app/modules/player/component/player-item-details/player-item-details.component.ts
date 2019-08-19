import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IPlayerItem } from '@shared/models/player/player-item.model';

@Component({
    selector: 'app-player-item-details',
    templateUrl: 'player-item-details.component.html',
    styleUrls: ['player-item-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerItemDetailsComponent {
    @Input()
    public player: IPlayerItem;
}
