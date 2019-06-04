import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { MatchService } from '@shared/services/match.service';
import { PlayerService } from '@shared/services/player.service';

@Component({
  selector: 'app-admin-match-create',
  templateUrl: './admin-match-create.component.html',
  styleUrls: ['./admin-match-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminMatchCreateComponent implements OnInit {
  public form: FormGroup;
  public players$: Observable<any[]>;

  constructor(
    private formBuilder: FormBuilder,
    private playerService: PlayerService,
    private matchService: MatchService
  ) {}

  ngOnInit(): void {
    this.generateForm();
    this.receivePlayers();
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
      secondTeam: []
    });
  }

  private receivePlayers(): void {
    this.players$ = this.playerService.getList();
  }
}
