import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { FieldModel } from '@shared/models/field/field.model';
import { FieldFacade } from '../../store/field.facade';

@Component({
  selector: 'app-field-item',
  templateUrl: './field-item.component.html',
  styleUrls: ['./field-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldItemComponent implements OnInit {
  public field$: Observable<FieldModel>;
  public isLoading$: Observable<boolean>;

  constructor(private fieldFacade: FieldFacade, private route: ActivatedRoute) {
    this.field$ = this.fieldFacade.selectedEntity$;
    this.isLoading$ = this.fieldFacade.isLoading$;
  }

  ngOnInit(): void {
    const fieldId: number = +this.route.snapshot.params.id;
    this.fieldFacade.loadSelectedEntity(fieldId);
  }
}
