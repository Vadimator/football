import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-field-item',
    templateUrl: 'field-item.component.html',
    styleUrls: ['field-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldItemComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
