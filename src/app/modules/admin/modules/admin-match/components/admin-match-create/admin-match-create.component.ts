import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Observable, zip } from 'rxjs';
import { map, share, withLatestFrom } from 'rxjs/operators';

import { MatchService } from '@shared/services/match.service';
import { FieldService } from '@shared/services/field.service';
import { FieldModel } from '@shared/models/field/field.model';
import { TeamService } from '@shared/services/team.service';

@Component({
    selector: 'app-admin-match-create',
    templateUrl: './admin-match-create.component.html',
    styleUrls: ['./admin-match-create.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminMatchCreateComponent implements OnInit, OnDestroy {
    public players$: Observable<any[]>;
    public firstTeams$: Observable<any[]>;
    public secondTeams$: Observable<any[]>;
    public fields$: Observable<FieldModel[]>;

    public firstTeamForm: FormGroup;
    public secondTeamForm: FormGroup;
    public otherForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private matchService: MatchService,
        private fieldService: FieldService,
        private teamService: TeamService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.generateFirstTeamForm();
        this.generateSecondTeamForm();
        this.generateOtherForm();

        this.receiveFields();
        this.receiveFirstTeams();
        this.receiveSecondTeams();
        this.receivePlayers();
    }

    ngOnDestroy(): void {}

    onSubmit(): void {
        if (this.firstTeamForm.valid && this.secondTeamForm.valid && this.otherForm.valid) {
            this.matchService
                .create({
                    ...this.firstTeamForm.value,
                    ...this.secondTeamForm.value,
                    ...this.otherForm.value
                })
                .pipe(untilDestroyed(this))
                .subscribe(() => this.router.navigate(['/admin', 'match']));
        }
    }

    private receivePlayers(): void {
        this.players$ = zip(
            this.firstTeamForm.get('firstTeamId').valueChanges,
            this.secondTeamForm.get('secondTeamId').valueChanges
        ).pipe(
            withLatestFrom(this.firstTeams$, (teamIds, teams) => teams.filter(team => teamIds.includes(team.id))),
            map(teams => teams.reduce((pre, cur) => [...pre.players, ...cur.players]))
        );
    }

    private receiveFields(): void {
        this.fields$ = this.fieldService.getList();
    }

    private receiveFirstTeams(): void {
        this.firstTeams$ = this.teamService.getList().pipe(share());
    }

    private receiveSecondTeams(): void {
        this.secondTeams$ = this.firstTeamForm.get('firstTeamId').valueChanges.pipe(
            withLatestFrom(this.firstTeams$, (firstTeamId, teams) => ({ firstTeamId, teams })),
            map(({ firstTeamId, teams }) => teams.filter((team: any) => team.id !== firstTeamId))
        );
    }

    private generateFirstTeamForm(): void {
        this.firstTeamForm = this.formBuilder.group({
            firstScore: [0, Validators.min(0)],
            firstTeamId: [[], Validators.required]
        });
    }

    private generateSecondTeamForm(): void {
        this.secondTeamForm = this.formBuilder.group({
            secondScore: [0, Validators.min(0)],
            secondTeamId: [[], Validators.required]
        });
    }

    private generateOtherForm(): void {
        this.otherForm = this.formBuilder.group({
            date: [new Date(), [Validators.required]],
            duration: [0, [Validators.required, Validators.min(0)]],
            field: [null, Validators.required],
            goals: [[]]
        });
    }
}
