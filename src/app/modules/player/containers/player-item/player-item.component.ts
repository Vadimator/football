import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IPlayerItem } from '@shared/models/player/player-item.model';
import { PlayerFacade } from '../../store/player.facade';

@Component({
  selector: 'app-player-item',
  templateUrl: 'player-item.component.html',
  styleUrls: ['player-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerItemComponent implements OnInit {
  public player$: Observable<IPlayerItem>;
  public isLoading$: Observable<boolean>;

  constructor(private playerFacade: PlayerFacade, private route: ActivatedRoute) {
    this.player$ = this.playerFacade.selectedEntity$;
    this.isLoading$ = this.playerFacade.isLoading$;
  }

  ngOnInit(): void {
    const playerId: number = +this.route.snapshot.params.id;
    this.playerFacade.loadSelectedEntity(playerId);
  }
}
