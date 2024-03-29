import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { UserModel } from '@shared/models/user/user.model';
import { UserFacade } from '../../../../store/facades/user.facade';

@Component({
    selector: 'app-admin-container',
    templateUrl: 'admin-container.component.html',
    styleUrls: ['admin-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminContainerComponent implements OnInit {
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

    logout(): void {
        this.userFacade.clear();
    }
}
