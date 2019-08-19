import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IMatchListItem } from '@shared/models/match/match-list-item.model';

@Component({
    selector: 'app-player-item-matches',
    templateUrl: 'player-item-matches.component.html',
    styleUrls: ['player-item-matches.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerItemMatchesComponent {
    @Input()
    public matches: IMatchListItem[] = [];
}
