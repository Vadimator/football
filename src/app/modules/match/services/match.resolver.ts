import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { MatchModel } from '../models/match.model';
import { MatchService } from '../../../shared/services/match.service';

@Injectable()
export class MatchResolver implements Resolve<MatchModel> {
  constructor(private matchService: MatchService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<MatchModel> {
    return this.matchService.getById(route.params.id);
  }
}
