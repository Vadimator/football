import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, withLatestFrom } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
    selector: 'app-admin-user-create',
    templateUrl: 'admin-user-create.component.html',
    styleUrls: ['admin-user-create.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminUserCreateComponent implements OnInit, OnDestroy {
    public form: FormGroup;
    public onSubmit$: Subject<void> = new Subject<void>();

    constructor(private formBuilder: FormBuilder, private router: Router) {}

    ngOnDestroy(): void {}

    ngOnInit() {
        this.generateForm();

        this.onSubmit$
            .pipe(
                withLatestFrom(this.form.valueChanges, this.form.statusChanges, (_, value, status) => ({
                    value,
                    status
                })),
                filter(({ status }) => status === 'VALID'),
                untilDestroyed(this)
            )
            .subscribe(() => this.router.navigate(['/admin', 'user']));
    }

    private generateForm(): void {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        }, { validator: this.checkPasswords });
    }

    private checkPasswords(control: AbstractControl) {
        const password: string = control.get('password').value;
        const confirmPassword: string = control.get('confirmPassword').value;

        if (password !== confirmPassword) {
            control.get('confirmPassword').setErrors({ NoPasswordMatch: true });
        }
    }
}
