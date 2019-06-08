import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FieldService } from '@shared/services/field.service';

@Injectable({ providedIn: 'root' })
export class FieldResolver implements Resolve<any> {
  constructor(private fieldService: FieldService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.fieldService.getOneById(route.params.id);
  }
}
