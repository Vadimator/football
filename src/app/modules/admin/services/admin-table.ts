import { EventEmitter, Input, Output } from '@angular/core';

export abstract class AdminTable {
    @Input()
    public dataSource: any[] = [];

    @Output()
    public onDelete: EventEmitter<number> = new EventEmitter<number>();

    public abstract displayedColumns: string[] = [];
}
