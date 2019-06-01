import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-match-list-item',
  templateUrl: './match-list-item.component.html',
  styleUrls: ['./match-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchListItemComponent {
  @Input() public match: any;
}
