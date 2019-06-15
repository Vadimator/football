import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { withLatestFrom, filter, mergeMap } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { TeamService } from '@shared/services/team.service';
import { PlayerService } from '@shared/services/player.service';

@Component({
  selector: 'app-admin-team-create',
  templateUrl: './admin-team-create.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminTeamCreateComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public onSubmit$: Subject<void> = new Subject<void>();
  public players$: Observable<any[]>;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private teamService: TeamService,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.generateForm();
    this.receivePlayers();

    this.onSubmit$
      .pipe(
        withLatestFrom(this.form.valueChanges, this.form.statusChanges, (_, value, status) => ({
          value,
          status
        })),
        filter(({ status }) => status === 'VALID'),
        mergeMap(({ value }) => this.teamService.create(value)),
        untilDestroyed(this)
      )
      .subscribe(() => this.router.navigate(['/admin', 'team']));
  }

  ngOnDestroy(): void {}

  private generateForm(): void {
    this.form = this.formBuilder.group({
      players: ['', Validators.required]
    });
  }

  private receivePlayers(): void {
    this.players$ = this.playerService.getList();
  }
}
