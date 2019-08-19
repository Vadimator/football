import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FieldModel } from '@shared/models/field/field.model';

@Component({
    selector: 'app-match-item-field',
    templateUrl: 'match-item-field.component.html',
    styleUrls: ['match-item-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchItemFieldComponent {
    @Input()
    public field: FieldModel;
}
