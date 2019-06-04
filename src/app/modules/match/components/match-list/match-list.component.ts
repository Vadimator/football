import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MatchService } from '@shared/services/match.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchListComponent implements OnInit {
  public matches$: Observable<any[]>;

  constructor(private matchService: MatchService) {}

  ngOnInit(): void {
    this.matches$ = this.matchService.getList();
  }
}
