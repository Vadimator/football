import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-admin-user-create',
    templateUrl: 'admin-user-create.component.html',
    styleUrls: ['admin-user-create.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminUserCreateComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
