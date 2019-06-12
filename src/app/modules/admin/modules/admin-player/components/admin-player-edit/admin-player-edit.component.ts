import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { filter, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { PlayerService } from '@shared/services/player.service';

@Component({
    selector: 'app-admin-player-edit',
    templateUrl: 'admin-player-edit.component.html',
    styleUrls: ['admin-player-edit.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPlayerEditComponent implements OnInit, OnDestroy {
    public form: FormGroup;
    public onSubmit$: Subject<void> = new Subject<void>();

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private playerService: PlayerService
    ) {}

    ngOnInit(): void {
        this.generateForm();

        const player = this.route.snapshot.data.player;
        this.form.patchValue({ name: player.name });

        this.onSubmit$
            .pipe(
                // todo: add startWith for valueChanges
                // todo: add startWith for statusChanges
                withLatestFrom(this.form.valueChanges, this.form.statusChanges, (_, value, status) => ({
                    value,
                    status
                })),
                filter(({ status }) => status === 'VALID'),
                map(({ value }) => ({ name: value.name.toLowerCase() })),
                mergeMap(({ name }) => this.playerService.update(player.id, { name })),
                untilDestroyed(this)
            )
            .subscribe(() => this.router.navigate(['/admin', 'player']));
    }

    ngOnDestroy(): void {}

    private generateForm(): void {
        this.form = this.formBuilder.group({
            name: ['', Validators.required]
        });
    }
}
