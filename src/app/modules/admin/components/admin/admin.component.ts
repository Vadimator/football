import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { UserModel } from '@shared/models/user/user.model';
import { UserFacade } from '../../../../store/facades/user.facade';

@Component({
    selector: 'app-admin',
    templateUrl: 'admin.component.html',
    styleUrls: ['admin.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent implements OnInit {
    public drawerMode$: Observable<'over' | 'push' | 'side'>;
    public isOpened$: Observable<boolean>;
    public user$: Observable<UserModel>;

    constructor(private breakpointObserver: BreakpointObserver, private userFacade: UserFacade) {
        this.user$ = this.userFacade.user$;
    }

    ngOnInit(): void {
        const isBreakPointTablet$ =  this.breakpointObserver
            .observe(['(max-width: 992px)'])
            .pipe(pluck('matches'));

        this.drawerMode$ = isBreakPointTablet$
            .pipe(map((isTablet: boolean) => isTablet ? 'over' : 'side'));

        this.isOpened$ = isBreakPointTablet$
            .pipe(map((isTablet: boolean) => !isTablet));
    }
}
