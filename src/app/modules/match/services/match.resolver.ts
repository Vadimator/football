import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { MatchModel } from '../models/match.model';
import { MatchService } from './match.service';

@Injectable()
export class MatchResolver implements Resolve<MatchModel> {
    constructor(private matchService: MatchService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MatchModel> {
        return this.matchService.getById(route.params.id).pipe(first());
    }
}
