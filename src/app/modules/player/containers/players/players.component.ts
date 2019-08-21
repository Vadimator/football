import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PageEvent, Sort, SortDirection } from '@angular/material';
import { Observable } from 'rxjs';

import { IPlayerListItem } from '@shared/models/player/player-list-item.model';
import { PlayerFacade } from '../../store/player.facade';

@Component({
    selector: 'app-players',
    templateUrl: 'players.component.html',
    styleUrls: ['players.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayersComponent implements OnInit {
    public players$: Observable<IPlayerListItem[]>;
    public isLoading$: Observable<boolean>;
    public page$: Observable<number>;
    public limit$: Observable<number>;
    public sort$: Observable<string>;
    public direction$: Observable<SortDirection>;
    public count$: Observable<number>;
    public isShowPaginator$: Observable<boolean>;

    constructor(private playerFacade: PlayerFacade) {
        this.players$ = this.playerFacade.collection$;
        this.isLoading$ = this.playerFacade.isLoading$;
        this.page$ = this.playerFacade.page$;
        this.limit$ = this.playerFacade.limit$;
        this.sort$ = this.playerFacade.sort$;
        this.direction$ = this.playerFacade.direction$;
        this.count$ = this.playerFacade.count$;
        this.isShowPaginator$ = this.playerFacade.isShowPaginator$;
    }

    ngOnInit() {
        this.playerFacade.loadCollection();
    }

    changeSort(sort: Sort): void {
        this.playerFacade.changeSort(sort.active, sort.direction);
    }

    onChangePage(page: PageEvent): void {
        this.playerFacade.changePage(page.pageIndex);
    }
}
