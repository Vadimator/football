import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-confirm',
    templateUrl: 'confirm.component.html',
    styleUrls: ['confirm.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmComponent {
    @Output() public onConfirmed: EventEmitter<void> = new EventEmitter<void>();
}
