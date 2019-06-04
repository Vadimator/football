import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { PlayerService } from '@shared/services/player.service';

@Component({
  selector: 'app-admin-player-create',
  templateUrl: './admin-player-create.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPlayerCreateComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private playerService: PlayerService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: '',
      lastName: ''
    });
  }

  onSubmit(): void {
    const { firstName, lastName } = this.form.value;

    this.playerService.create(firstName, lastName).subscribe();
  }
}
