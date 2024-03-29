import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SharedModule } from '@shared/shared.module';
import { PlayerRoutingModule } from './player-routing.module';

import { PlayerTableComponent } from './component/player-table/player-table.component';
import { PlayerItemComponent } from './containers/player-item/player-item.component';
import { PlayersComponent } from './containers/players/players.component';
import { PlayerItemDetailsComponent } from './component/player-item-details/player-item-details.component';
import { PlayerItemMatchesComponent } from './component/player-item-matches/player-item-matches.component';
import { PlayerItemChartComponent } from './component/player-item-chart/player-item-chart.component';
import { PlayerEffect } from './store/player.effect';
import { reducer } from './store/player.reducer';
import { PlayerFacade } from './store/player.facade';

@NgModule({
    imports: [
        SharedModule,
        NgxChartsModule,
        PlayerRoutingModule,
        StoreModule.forFeature('player', reducer),
        EffectsModule.forFeature([PlayerEffect])
    ],
    declarations: [
        PlayerTableComponent,
        PlayerItemComponent,
        PlayerItemDetailsComponent,
        PlayerItemMatchesComponent,
        PlayerItemChartComponent,
        PlayersComponent
    ],
    providers: [PlayerFacade]
})
export class PlayerModule {}
