import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MatchModel } from '../../models/match.model';
import { MatchService } from '../../services/match.service';

@Component({
    selector: 'app-match-list',
    templateUrl: './match-list.component.html',
    styleUrls: ['./match-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchListComponent implements OnInit {
    public matches$: Observable<MatchModel[]>;

    constructor(private matchService: MatchService) {}

    ngOnInit(): void {
        this.matches$ = this.matchService.getList();
    }
}
