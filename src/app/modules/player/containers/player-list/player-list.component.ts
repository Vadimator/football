import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PlayerFacade } from '../../store/player.facade';
import { IPlayerListItem } from '@shared/models/player/player-list-item.model';

@Component({
  selector: 'app-player-list',
  templateUrl: 'player-list.component.html',
  styleUrls: ['player-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerListComponent implements OnInit {
  public players$: Observable<IPlayerListItem[]>;
  public isLoading$: Observable<boolean>;

  constructor(private playerFacade: PlayerFacade) {
    this.players$ = this.playerFacade.collection$;
    this.isLoading$ = this.playerFacade.isLoading$;
  }

  ngOnInit() {
    this.playerFacade.loadCollection();
  }
}
