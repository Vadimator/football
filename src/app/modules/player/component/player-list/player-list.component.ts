import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PlayerService } from '@shared/services/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: 'player-list.component.html',
  styleUrls: ['player-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerListComponent implements OnInit {
  public players$: Observable<any[]>;

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.players$ = this.playerService.getListStatistic();

  }
}
