import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchModel } from '../../models/match.model';

@Component({
    selector: 'app-match-item',
    templateUrl: 'match-item.component.html',
    styleUrls: ['match-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchItemComponent implements OnInit {
    public match: MatchModel = new MatchModel();

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.match = this.route.snapshot.data.match;
    }
}
