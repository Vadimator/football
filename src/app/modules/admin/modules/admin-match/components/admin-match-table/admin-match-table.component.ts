import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MatDialog } from '@angular/material';

import { MatchService } from '@shared/services/match.service';
import { ConfirmComponent } from '@shared/components/confirm/confirm.component';
import { switchMapTo, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-admin-match-table',
  templateUrl: './admin-match-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminMatchTableComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'duration', 'score', 'createdAt', 'action'];
  public matches$: Observable<any[]>;
  public onUpdateList$: Subject<void> = new Subject<void>();

  constructor(private matchService: MatchService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.matches$ = this.onUpdateList$.pipe(
      startWith({}),
      switchMapTo(this.matchService.getList())
    );
  }

  onDelete(matchId: number) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '250px'
    });

    dialogRef.componentInstance.onConfirmed
      .pipe(switchMapTo(this.matchService.removeOneById(matchId)))
      .subscribe(() => {
        this.onUpdateList$.next();
        dialogRef.close();
      });
  }
}
