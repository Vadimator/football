import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-player-item-chart',
    templateUrl: 'player-item-chart.component.html',
    styleUrls: ['player-item-chart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerItemChartComponent {
    @Input()
    public set data(data: { matchId: number; countGoals: string }[]) {
        if (Array.isArray(data) && data.length > 0) {
            this.results = [{
                name: 'Голы',
                series: data.map(({ matchId, countGoals }) => ({ value: +countGoals, name: matchId.toString() }))
            }];
            this.isShowChart = true;
        } else {
            this.isShowChart = false;
        }
    }

    public results: { name: string, series: { name: string; value: number; }[] }[] = [];
    public isShowChart = false;
}
