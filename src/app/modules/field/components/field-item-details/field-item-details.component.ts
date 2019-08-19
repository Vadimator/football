import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FieldModel } from '@shared/models/field/field.model';

@Component({
    selector: 'app-field-item-details',
    templateUrl: 'field-item-details.component.html',
    styleUrls: ['field-item-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldItemDetailsComponent {
    @Input()
    public field: FieldModel;
}
