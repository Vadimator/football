import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { filter, withLatestFrom } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
    selector: 'app-admin-login',
    templateUrl: 'admin-login.component.html',
    styleUrls: ['admin-login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminLoginComponent implements OnInit, OnDestroy {
    public form: FormGroup;
    public onSubmit$: Subject<void> = new Subject<void>();

    constructor(private formBuilder: FormBuilder, private router: Router) {}

    ngOnInit(): void {
        this.generateForm();

        this.onSubmit$.pipe(
            withLatestFrom(this.form.valueChanges, this.form.statusChanges, (_, value, status) => ({ value, status })),
            filter(({ status }) => status === 'VALID'),
            untilDestroyed(this)
        ).subscribe(() => this.router.navigate(['/admin']));
    }

    ngOnDestroy(): void {}

    private generateForm(): void {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
}
