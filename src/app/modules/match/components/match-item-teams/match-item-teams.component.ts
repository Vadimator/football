import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ITeam } from '@shared/models/team/team.model';

@Component({
    selector: 'app-match-item-teams',
    templateUrl: 'match-item-teams.component.html',
    styleUrls: ['match-item-teams.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchItemTeamsComponent {
    @Input()
    public firstTeam: ITeam;

    @Input()
    public secondTeam: ITeam;
}
