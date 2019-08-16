import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { MatchFacade } from '../../store/match.facade';

@Component({
    selector: 'app-match-item',
    templateUrl: 'match-item.component.html',
    styleUrls: ['match-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchItemComponent implements OnInit {
    public match$: Observable<any>;
    public isLoading$: Observable<boolean>;

    constructor(private matchFacade: MatchFacade, private route: ActivatedRoute) {
        this.match$ = this.matchFacade.selectedEntity$;
        this.isLoading$ = this.matchFacade.isLoading$;
    }

    ngOnInit(): void {
        const matchId: number = +this.route.snapshot.params.id;
        this.matchFacade.loadSelectedEntity(matchId);
    }
}
