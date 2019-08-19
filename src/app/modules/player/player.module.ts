import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '@shared/shared.module';
import { PlayerRoutingModule } from './player-routing.module';

import { PlayerListComponent } from './containers/player-list/player-list.component';
import { PlayerListItemComponent } from './component/player-list-item/player-list-item.component';
import { PlayerItemComponent } from './containers/player-item/player-item.component';
import { PlayerEffect } from './store/player.effect';
import { reducer } from './store/player.reducer';
import { PlayerFacade } from './store/player.facade';

@NgModule({
    imports: [
        SharedModule,
        PlayerRoutingModule,
        StoreModule.forFeature('player', reducer),
        EffectsModule.forFeature([PlayerEffect])
    ],
    declarations: [PlayerListComponent, PlayerListItemComponent, PlayerItemComponent],
    providers: [PlayerFacade]
})
export class PlayerModule {}
