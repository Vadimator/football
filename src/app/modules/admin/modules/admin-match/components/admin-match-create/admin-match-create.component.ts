import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { MatchService } from '@shared/services/match.service';
import { PlayerService } from '@shared/services/player.service';
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
  public form: FormGroup;
  public players$: Observable<any[]>;
  public teams$: Observable<any[]>;
  public fields$: Observable<FieldModel[]>;

  constructor(
    private formBuilder: FormBuilder,
    private playerService: PlayerService,
    private matchService: MatchService,
    private fieldService: FieldService,
    private teamService: TeamService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.generateForm();
    this.receivePlayers();
    this.receiveFields();
    this.receiveTeams();
  }

  ngOnDestroy(): void {}

  onSubmit(): void {
    this.matchService
      .create(this.form.value)
      .pipe(untilDestroyed(this))
      .subscribe(() => this.router.navigate(['/admin', 'match']));
  }

  private generateForm(): void {
    this.form = this.formBuilder.group({
      duration: [],
      firstScore: 0,
      secondScore: 0,
      firstTeamId: [],
      secondTeamId: [],
      field: [],
      goals: []
    });
  }

  private receivePlayers(): void {
    this.players$ = this.playerService.getList();
  }

  private receiveFields(): void {
    this.fields$ = this.fieldService.getList();
  }

  private receiveTeams(): void {
    this.teams$ = this.teamService.getList();
  }
}
