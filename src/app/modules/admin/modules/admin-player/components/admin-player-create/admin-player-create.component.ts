import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, map, mergeMap, withLatestFrom } from 'rxjs/operators';

import { PlayerService } from '@shared/services/player.service';

@Component({
  selector: 'app-admin-player-create',
  templateUrl: './admin-player-create.component.html',
  styleUrls: ['./admin-player-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPlayerCreateComponent implements OnInit {
  public form: FormGroup;
  public onSubmit$: Subject<void> = new Subject<void>();

  constructor(private formBuilder: FormBuilder, private router: Router, private playerService: PlayerService) {}

  ngOnInit(): void {
    this.generateForm();

    this.onSubmit$
      .pipe(
        withLatestFrom(this.form.valueChanges, this.form.statusChanges, (_, value, status) => ({ value, status })),
        filter(({ status }) => status === 'VALID'),
        map(({ value }) => ({ name: value.name.toLowerCase() })),
        mergeMap(({ name }) => this.playerService.create(name))
      )
      .subscribe(() => this.router.navigate(['/admin', 'player']));
  }

  private generateForm(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }
}
