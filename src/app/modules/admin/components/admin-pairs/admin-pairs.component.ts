import { ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { AdminPairItemDirective } from '../../directives/admin-pair-item.directive';

@Component({
    selector: 'app-admin-pairs',
    templateUrl: 'admin-pairs.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPairsComponent {
    @ContentChild(AdminPairItemDirective, { read: TemplateRef, static: true })
    public pairItemTemplate;

    @Input()
    public items: any[] = [];
}
