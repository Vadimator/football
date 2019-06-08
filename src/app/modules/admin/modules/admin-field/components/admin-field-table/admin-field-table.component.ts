import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable, Subject } from 'rxjs';
import { startWith, switchMapTo } from 'rxjs/operators';

import { FieldService } from '@shared/services/field.service';
import { ConfirmComponent } from '@shared/components/confirm/confirm.component';

@Component({
  selector: 'app-admin-field-table',
  templateUrl: './admin-field-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminFieldTableComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'name', 'address', 'website', 'pricePerMinute', 'action'];
  public fields$: Observable<any[]>;
  public onUpdateList$: Subject<void> = new Subject<void>();

  constructor(private fieldService: FieldService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.fields$ = this.onUpdateList$.pipe(
      startWith({}),
      switchMapTo(this.fieldService.getList())
    );
  }

  onDelete(fieldId: number) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '250px'
    });

    dialogRef.componentInstance.onConfirmed
      .pipe(switchMapTo(this.fieldService.removeOneById(fieldId)))
      .subscribe(() => {
        this.onUpdateList$.next();
        dialogRef.close();
      });
  }
}
