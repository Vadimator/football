import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IMatchGoalItem } from '@shared/models/match/match-goal-item.model';

@Component({
    selector: 'app-match-item-goals',
    templateUrl: 'match-item-goals.component.html',
    styleUrls: ['match-item-goals.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchItemGoalsComponent {
    @Input()
    public goals: IMatchGoalItem[] = [];
}
