import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatchModel } from '../../models/match.model';

@Component({
    selector: 'app-match-item',
    templateUrl: 'match-item.component.html',
    styleUrls: ['match-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchItemComponent implements OnInit {
    public match: MatchModel = new MatchModel();
    ngOnInit() {
    }
}
