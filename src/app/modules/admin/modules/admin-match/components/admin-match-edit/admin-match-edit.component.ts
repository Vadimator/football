import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Observable, Subject } from 'rxjs';
import { filter, withLatestFrom } from 'rxjs/operators';

import { TeamService } from '@shared/services/team.service';
import { FieldService } from '@shared/services/field.service';
import { FieldModel } from '@shared/models/field/field.model';

@Component({
    selector: 'app-admin-match-edit',
    templateUrl: 'admin-match-edit.component.html',
    styleUrls: ['admin-match-edit.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminMatchEditComponent implements OnInit, OnDestroy {
    public form: FormGroup;
    public teams$: Observable<any[]>;
    public fields$: Observable<FieldModel[]>;
    public onSubmit$: Subject<void> = new Subject<void>();

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private teamService: TeamService,
        private fieldService: FieldService,
    ) {}

    ngOnInit() {
        this.generateForm();
        this.fillForm();

        this.teams$ = this.teamService.getList();
        this.fields$ = this.fieldService.getList();

        this.onSubmit$
            .pipe(
                withLatestFrom(this.form.valueChanges, this.form.statusChanges, (_, value, status) => ({
                    value,
                    status
                })),
                filter(({ status }) => status === 'VALID'),
                untilDestroyed(this)
                // TODO: add http request
            )
            .subscribe(() => this.router.navigate(['/admin', 'match']));
    }

    ngOnDestroy(): void {}

    private generateForm(): void {
        this.form = this.formBuilder.group({
            firstScore: [0, [Validators.required, Validators.min(0)]],
            firstTeamId: [null, Validators.required],
            secondScore: [0, [Validators.required, Validators.min(0)]],
            secondTeamId: [null, Validators.required],
            date: [new Date(), Validators.required],
            duration: [0, [Validators.required, Validators.min(0)]],
            field: [null, Validators.required]
        });
    }

    private fillForm(): void {
        const match = this.route.snapshot.data.match;

        this.form.patchValue({
            firstScore: match.firstScore,
            firstTeamId: match.firstTeam.id,
            secondScore: match.secondScore,
            secondTeamId: match.secondTeam.id,
            duration: match.duration,
            field: match.field.id
        });
    }
}
