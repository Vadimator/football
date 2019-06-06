import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-list-item',
  templateUrl: './team-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamListItemComponent {
  @Input() public team: any;
}
