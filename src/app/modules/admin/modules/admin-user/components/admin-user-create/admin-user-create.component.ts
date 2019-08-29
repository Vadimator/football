import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { filter, withLatestFrom } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { UserFacade } from '../../../../../../store/facades/user.facade';
import { RoleEnum } from '@shared/enums/role.enum';

@Component({
    selector: 'app-admin-user-create',
    templateUrl: 'admin-user-create.component.html',
    styleUrls: ['admin-user-create.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminUserCreateComponent implements OnInit, OnDestroy {
    public form: FormGroup;
    public onSubmit$: Subject<void> = new Subject<void>();
    public isLoading$: Observable<boolean>;
    public roles = Object.keys(RoleEnum)
        .map(key => RoleEnum[key]);

    constructor(
        private formBuilder: FormBuilder,
        private userFacade: UserFacade,
        private changeDetectionRef: ChangeDetectorRef
    ) {
        this.isLoading$ = this.userFacade.isLoading$;
    }

    ngOnDestroy(): void {}

    ngOnInit() {
        this.generateForm();

        this.userFacade.message$
            .pipe(
                filter((message: string) => !!message),
                untilDestroyed(this)
            )
            .subscribe(() => {
                this.form.get('username').setErrors({ serverError: true });
                this.changeDetectionRef.detectChanges();
            });

        this.onSubmit$
            .pipe(
                withLatestFrom(this.form.valueChanges, this.form.statusChanges, (_, value, status) => ({
                    value,
                    status
                })),
                filter(({ status }) => status === 'VALID'),
                untilDestroyed(this)
            )
            .subscribe(({ value }) => this.userFacade.register(value.username, value.password, value.role));
    }

    private generateForm(): void {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
            role: [null, Validators.required]
        }, { validator: this.checkPasswords });
    }

    private checkPasswords(control: AbstractControl) {
        const password: string = control.get('password').value;
        const confirmPassword: string = control.get('confirmPassword').value;

        // TODO: fix bug, when use change confirmPassword
        if (password !== confirmPassword) {
            control.get('confirmPassword').setErrors({ NoPasswordMatch: true });
        }
    }
}
