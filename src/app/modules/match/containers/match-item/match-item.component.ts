import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { MatchFacade } from '../../store/match.facade';

@Component({
  selector: 'app-match-item',
  templateUrl: 'match-item.component.html',
  styleUrls: ['match-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchItemComponent {
  public match$: Observable<any>;

  constructor(private matchFacade: MatchFacade) {
    this.match$ = this.matchFacade.selectedEntity$;
  }
}
