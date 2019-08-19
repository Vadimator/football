import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FieldModel } from '@shared/models/field/field.model';
import { FieldFacade } from '../../store/field.facade';

@Component({
  selector: 'app-field-list',
  templateUrl: 'field-list.component.html',
  styleUrls: ['field-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldListComponent implements OnInit {
  public fields$: Observable<FieldModel[]>;
  public isLoading$: Observable<boolean>;

  constructor(private fieldFacade: FieldFacade) {
    this.fields$ = this.fieldFacade.collection$;
    this.isLoading$ = this.fieldFacade.isLoading$;
  }

  ngOnInit() {
    this.fieldFacade.loadCollection();
  }
}
