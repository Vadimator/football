import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PlayerService } from '@shared/services/player.service';
import { IPlayer } from '@shared/models/player/player.model';
import { IMatchListItem } from '@shared/models/match/match-list-item.model';
import { MatchService } from '@shared/services/match.service';
import { FieldModel } from '@shared/models/field/field.model';
import { FieldService } from '@shared/services/field.service';

@Component({
    selector: 'app-admin',
    templateUrl: 'admin.component.html',
    styleUrls: ['admin.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent implements OnInit {
    public players$: Observable<IPlayer[]>;
    public matches$: Observable<IMatchListItem[]>;
    public fields$: Observable<FieldModel[]>;

    constructor(
        private playerService: PlayerService,
        private matchService: MatchService,
        private fieldService: FieldService
    ) {}

    ngOnInit() {
        this.players$ = this.playerService.getListByLatestMonth();
        this.matches$ = this.matchService.getListByLatestMonth();
        this.fields$ = this.fieldService.getListByLatestMonth();
    }
}
