import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MatchFacade } from '../../store/match.facade';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchListComponent implements OnInit {
  public matches$: Observable<any[]>;
  public isLoading$: Observable<boolean>;

  constructor(private matchFacade: MatchFacade) {
    this.matches$ = this.matchFacade.collection$;
    this.isLoading$ = this.matchFacade.isLoading$;
  }

  ngOnInit(): void {
    this.matchFacade.loadCollection();
  }
}
