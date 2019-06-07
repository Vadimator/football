import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { filter, map, mergeMap, withLatestFrom } from 'rxjs/operators';

import { PlayerService } from '@shared/services/player.service';

@Component({
    selector: 'app-admin-player-edit',
    templateUrl: 'admin-player-edit.component.html',
    styleUrls: ['admin-player-edit.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPlayerEditComponent implements OnInit {
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
        this.form.patchValue({ firstName: player.firstName, lastName: player.lastName });

        this.onSubmit$
            .pipe(
                // todo: add startWith for valueChanges
                // todo: add startWith for statusChanges
                withLatestFrom(this.form.valueChanges, this.form.statusChanges, (_, value, status) => ({ value, status })),
                filter(({ status }) => status === 'VALID'),
                map(({ value }) => ({ firstName: value.firstName.toLowerCase(), lastName: value.lastName.toLowerCase() })),
                mergeMap(({ firstName, lastName }) => this.playerService.update(player.id, { firstName, lastName }))
            )
            .subscribe(() => this.router.navigate(['/admin', 'player']));
    }

    private generateForm(): void {
        this.form = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required]
        });
    }
}
