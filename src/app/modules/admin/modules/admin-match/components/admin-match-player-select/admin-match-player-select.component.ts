import { ChangeDetectionStrategy, Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelectChange } from '@angular/material';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';

import { PlayerService } from '@shared/services/player.service';

@Component({
    selector: 'app-admin-match-player-select',
    templateUrl: 'admin-match-player-select.component.html',
    styleUrls: ['admin-match-player-select.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AdminMatchPlayerSelectComponent),
            multi: true
        }
    ]
})
export class AdminMatchPlayerSelectComponent implements OnInit, ControlValueAccessor {
    public players$: Observable<any[]>;
    public selectedPlayers: any[] = [];

    get value(): number[] {
        return this.innerValue ;
    }

    set value(playerIds: number[]) {
        if (playerIds !== this.innerValue) {
            this.innerValue  = playerIds;
            this.onChangeCallback(playerIds);
        }
    }

    private innerValue: number[] = [];

    private onTouchedCallback: () => void = () => {};
    private onChangeCallback: (_: any) => void = () => {};

    constructor(private playerService: PlayerService) {}

    ngOnInit() {
        this.players$ = this.playerService.getList();
    }

    writeValue(value: number[]): void {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    registerOnChange(fn: any): void {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouchedCallback = fn;
    }

    onChangeSelection(matSelectChange: MatSelectChange): void {
        this.selectedPlayers = [...this.selectedPlayers, matSelectChange.value];
        matSelectChange.source.value = null;
        this.fillValue();
    }

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.selectedPlayers, event.previousIndex, event.currentIndex);
        this.fillValue();
    }

    private fillValue(): void {
        this.value = this.selectedPlayers.map((player: any) => player.id);
    }
}
