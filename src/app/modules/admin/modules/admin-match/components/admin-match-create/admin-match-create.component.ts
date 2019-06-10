import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

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
export class AdminMatchCreateComponent implements OnInit {
  public form: FormGroup;
  public players$: Observable<any[]>;
  public fields$: Observable<FieldModel[]>;

  constructor(
    private formBuilder: FormBuilder,
    private playerService: PlayerService,
    private matchService: MatchService,
    private fieldService: FieldService
  ) {}

  ngOnInit(): void {
    this.generateForm();
    this.receivePlayers();
    this.receiveFields();
  }

  onSubmit(): void {
    this.matchService.create(this.form.value).subscribe();
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
