import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { startWith, switchMapTo } from 'rxjs/operators';

import { PlayerService } from '@shared/services/player.service';
import { ConfirmComponent } from '@shared/components/confirm/confirm.component';

@Component({
  selector: 'app-admin-player-table',
  templateUrl: 'admin-player-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPlayerTableComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'name', 'createdAt', 'action'];
  public players$: Observable<any[]>;
  public onUpdateList$: Subject<void> = new Subject<void>();

  constructor(private playerService: PlayerService, private dialog: MatDialog) {}

  ngOnInit() {
    this.players$ = this.onUpdateList$.pipe(
      startWith({}),
      switchMapTo(this.playerService.getList())
    );
  }

  onDelete(playerId: number) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '250px'
    });

    dialogRef.componentInstance.onConfirmed
      .pipe(switchMapTo(this.playerService.removeOneById(playerId)))
      .subscribe(() => {
        this.onUpdateList$.next();
        dialogRef.close();
      });
  }
}
