import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { withLatestFrom, filter, mergeMap } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { FieldService } from '@shared/services/field.service';

@Component({
    selector: 'app-admin-field-edit',
    templateUrl: './admin-field-edit.component.html',
    styleUrls: ['./admin-field-edit.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminFieldEditComponent implements OnInit, OnDestroy {
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
                withLatestFrom(this.form.valueChanges, this.form.statusChanges, (_, value, status) => ({
                    value,
                    status
                })),
                filter(({ status }) => status === 'VALID'),
                mergeMap(({ value }) => this.fieldService.update(field.id, value)),
                untilDestroyed(this)
            )
            .subscribe(() => this.router.navigate(['/admin', 'field']));
    }

    ngOnDestroy(): void {
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
