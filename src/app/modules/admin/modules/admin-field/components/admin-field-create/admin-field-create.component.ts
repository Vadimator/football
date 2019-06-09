import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { withLatestFrom, filter, mergeMap } from 'rxjs/operators';

import { FieldService } from '@shared/services/field.service';

@Component({
  selector: 'app-admin-field-create',
  templateUrl: './admin-field-create.component.html',
  styleUrls: ['./admin-field-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminFieldCreateComponent implements OnInit {
  public form: FormGroup;
  public onSubmit$: Subject<void> = new Subject<void>();

  constructor(private formBuilder: FormBuilder, private router: Router, private fieldService: FieldService) {}

  ngOnInit(): void {
    this.generateForm();

    this.onSubmit$
      .pipe(
        withLatestFrom(this.form.valueChanges, this.form.statusChanges, (_, value, status) => ({ value, status })),
        filter(({ status }) => status === 'VALID'),
        mergeMap(({ value }) => this.fieldService.create(value))
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
