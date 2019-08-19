import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IPlayerListItem } from '@shared/models/player/player-list-item.model';

@Component({
  selector: 'app-player-list-item',
  templateUrl: 'player-list-item.component.html',
  styleUrls: ['player-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerListItemComponent {
  @Input() public player: IPlayerListItem;
}
