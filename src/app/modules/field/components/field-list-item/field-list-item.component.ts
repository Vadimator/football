import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-field-list-item',
    templateUrl: 'field-list-item.component.html',
    styleUrls: ['field-list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldListItemComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
