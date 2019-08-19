import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ITeam } from '@shared/models/team/team.model';

@Component({
    selector: 'app-match-item-team',
    templateUrl: 'match-item-team.component.html',
    styleUrls: ['match-item-team.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchItemTeamComponent {
    @Input()
    public heading: string;

    @Input()
    public team: ITeam;
}
