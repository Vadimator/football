import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { filter, withLatestFrom } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { UserFacade } from '../../../../store/facades/user.facade';

@Component({
    selector: 'app-admin-login',
    templateUrl: 'admin-login.component.html',
    styleUrls: ['admin-login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminLoginComponent implements OnInit, OnDestroy {
    public form: FormGroup;
    public onSubmit$: Subject<void> = new Subject<void>();

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userFacade: UserFacade,
        private changeDetectionRef: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this.generateForm();

        this.userFacade.message$
            .pipe(
                filter((message: string) => !!message),
                untilDestroyed(this)
            )
            .subscribe(() => {
                this.form.get('password').setErrors({ serverError: true });
                this.form.get('username').setErrors({ serverError: true });
                this.changeDetectionRef.detectChanges();
            });

        this.onSubmit$.pipe(
            withLatestFrom(this.form.valueChanges, this.form.statusChanges, (_, value, status) => ({ value, status })),
            filter(({ status }) => status === 'VALID'),
            untilDestroyed(this)
        ).subscribe(({ value }) => this.userFacade.login(value.username, value.password));
    }

    ngOnDestroy(): void {}

    private generateForm(): void {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
}
