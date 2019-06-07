import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-admin-player',
    templateUrl: 'admin-player.component.html',
    styleUrls: ['admin-player.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPlayerComponent {
}
