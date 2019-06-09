import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { FieldService } from '@shared/services/field.service';
import { withLatestFrom, filter, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-admin-field-edit',
  templateUrl: './admin-field-edit.component.html',
  styleUrls: ['./admin-field-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminFieldEditComponent implements OnInit {
  public form: FormGroup;
  public onSubmit$: Subject<void> = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private fieldService: FieldService
  ) {}

  ngOnInit(): void {
    this.generateForm();

    const field = this.route.snapshot.data.field;
    this.form.patchValue(field);

    this.onSubmit$
      .pipe(
        withLatestFrom(this.form.valueChanges, this.form.statusChanges, (_, value, status) => ({ value, status })),
        filter(({ status }) => status === 'VALID'),
        mergeMap(({ value }) => this.fieldService.update(field.id, value))
      )
      .subscribe(() => this.router.navigate(['/admin', 'field']));
  }

  private generateForm(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      zip: ['', Validators.required],
      website: ['', Validators.required],
      pricePerMinute: [0, Validators.required]
    });
  }
}
