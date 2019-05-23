import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-field-list',
    templateUrl: 'field-list.component.html',
    styleUrls: ['field-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldListComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
