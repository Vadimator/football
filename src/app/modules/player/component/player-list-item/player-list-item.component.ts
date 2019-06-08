import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-list-item',
  templateUrl: 'player-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerListItemComponent {
  @Input() public player: any;
}
