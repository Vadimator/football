import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FieldModel } from '@shared/models/field/field.model';

@Component({
  selector: 'app-field-list-item',
  templateUrl: 'field-list-item.component.html',
  styleUrls: ['field-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldListItemComponent {
  @Input() public field: FieldModel = new FieldModel();
}
