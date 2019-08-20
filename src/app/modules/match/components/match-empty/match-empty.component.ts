import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-match-empty',
    templateUrl: 'match-empty.component.html',
    styleUrls: ['match-empty.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchEmptyComponent {}
