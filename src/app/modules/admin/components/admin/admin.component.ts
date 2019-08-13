import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

@Component({
    selector: 'app-admin',
    templateUrl: 'admin.component.html',
    styleUrls: ['admin.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent implements OnInit {
    public drawerMode$: Observable<'over' | 'push' | 'side'>;
    public isOpened$: Observable<boolean>;

    constructor(private breakpointObserver: BreakpointObserver) {}

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
