import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { MatchService } from '@shared/services/match.service';
import { PlayerService } from '@shared/services/player.service';
import { FieldService } from '@shared/services/field.service';
import { FieldModel } from '@shared/models/field/field.model';

@Component({
  selector: 'app-admin-match-create',
  templateUrl: './admin-match-create.component.html',
  styleUrls: ['./admin-match-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminMatchCreateComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public players$: Observable<any[]>;
  public fields$: Observable<FieldModel[]>;

  constructor(
    private formBuilder: FormBuilder,
    private playerService: PlayerService,
    private matchService: MatchService,
    private fieldService: FieldService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.generateForm();
    this.receivePlayers();
    this.receiveFields();
  }

  ngOnDestroy(): void {}

  onSubmit(): void {
    this.matchService.create(this.form.value)
        .pipe(untilDestroyed(this))
        .subscribe(() => this.router.navigate(['/admin', 'match']));
  }

  private generateForm(): void {
    this.form = this.formBuilder.group({
      duration: [],
      firstScore: 0,
      secondScore: 0,
      firstTeam: [],
      secondTeam: [],
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
}
