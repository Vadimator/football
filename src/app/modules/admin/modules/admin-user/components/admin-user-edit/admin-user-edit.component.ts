import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-admin-user-edit',
    templateUrl: 'admin-user-edit.component.html',
    styleUrls: ['admin-user-edit.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminUserEditComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
