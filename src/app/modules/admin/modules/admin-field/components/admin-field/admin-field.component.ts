import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';

import { FieldModel } from '@shared/models/field/field.model';
import { FieldService } from '@shared/services/field.service';
import { AdminCrud } from '../../../../services/admin-crud';

@Component({
  selector: 'app-admin-field',
  templateUrl: './admin-field.component.html',
  styleUrls: ['./admin-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminFieldComponent extends AdminCrud<FieldModel> {
  constructor(protected dialog: MatDialog, private fieldService: FieldService) {
    super(dialog);
  }

  protected getCollection(): Observable<FieldModel[]> {
    return this.fieldService.getList();
  }

  protected removeOneById(fieldId: number): Observable<FieldModel> {
    return this.fieldService.removeOneById(fieldId);
  }
}
