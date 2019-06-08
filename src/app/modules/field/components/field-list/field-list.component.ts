import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FieldService } from '@shared/services/field.service';
import { FieldModel } from '@shared/models/field/field.model';

@Component({
  selector: 'app-field-list',
  templateUrl: 'field-list.component.html',
  styleUrls: ['field-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldListComponent implements OnInit {
  public fields$: Observable<FieldModel[]>;

  constructor(private fieldService: FieldService) {}

  ngOnInit() {
    this.fields$ = this.fieldService.getList();
  }
}
