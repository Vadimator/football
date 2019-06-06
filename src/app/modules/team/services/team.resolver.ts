import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { TeamService } from '@shared/services/team.service';

@Injectable()
export class TeamResolver implements Resolve<any> {
    constructor(private teamService: TeamService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this.teamService.getOneById(route.params.id);
    }
}
