import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-team-item',
    templateUrl: 'team-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamItemComponent implements OnInit {
    public team: any;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.team = this.route.snapshot.data.team;
    }
}
