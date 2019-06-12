import { OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable, Subject } from 'rxjs';
import { startWith, switchMapTo } from 'rxjs/operators';

import { ConfirmComponent } from '@shared/components/confirm/confirm.component';
import { untilDestroyed } from 'ngx-take-until-destroy';

export abstract class AdminCrud<T> implements OnInit, OnDestroy {
    public collection$: Observable<T[]>;
    public onUpdateList$: Subject<void> = new Subject<void>();

    protected constructor(protected dialog: MatDialog) {}

    protected abstract getCollection(): Observable<T[]>;
    protected abstract removeOneById(entityId: number): Observable<T>;

    ngOnInit(): void {
        this.collection$ = this.onUpdateList$.pipe(
            startWith({}),
            switchMapTo(this.getCollection())
        );
    }

    ngOnDestroy(): void {}

    onDelete(entityId: number) {
        const dialogRef = this.dialog.open(ConfirmComponent, {
            width: '250px'
        });

        dialogRef.componentInstance.onConfirmed
            .pipe(
                switchMapTo(this.removeOneById(entityId)),
                untilDestroyed(this)
            )
            .subscribe(() => {
                this.onUpdateList$.next();
                dialogRef.close();
            });
    }
}
