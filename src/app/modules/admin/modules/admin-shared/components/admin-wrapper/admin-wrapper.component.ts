import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-admin-wrapper',
    templateUrl: 'admin-wrapper.component.html',
    styleUrls: ['admin-wrapper.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminWrapperComponent {
    @Input() public heading: string;
    @Input() public buttonName: string;
    @Input() public buttonLink: string[] = [];
}
