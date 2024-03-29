import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { MatchService } from '@shared/services/match.service';

@Injectable({ providedIn: 'root' })
export class MatchResolver implements Resolve<any> {
  constructor(private matchService: MatchService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.matchService.getOneById(route.params.id);
  }
}
