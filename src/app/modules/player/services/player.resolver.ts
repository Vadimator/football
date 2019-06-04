import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PlayerService } from '@shared/services/player.service';

@Injectable()
export class PlayerResolver implements Resolve<any> {
  constructor(private playerService: PlayerService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.playerService.getOneById(route.params.id);
  }
}
