import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-admin-login',
    templateUrl: 'admin-login.component.html',
    styleUrls: ['admin-login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminLoginComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
