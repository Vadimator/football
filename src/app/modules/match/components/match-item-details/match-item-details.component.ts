import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IMatchItem } from '@shared/models/match/match-item.model';

@Component({
    selector: 'app-match-item-details',
    templateUrl: 'match-item-details.component.html',
    styleUrls: ['match-item-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchItemDetailsComponent {
    @Input()
    public match: IMatchItem;
}
