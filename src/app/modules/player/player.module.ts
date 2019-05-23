import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PlayerRoutingModule } from './player-routing.module';

import { PlayerListComponent } from './component/player-list/player-list.component';
import { PlayerListItemComponent } from './component/player-list-item/player-list-item.component';
import { PlayerItemComponent } from './component/player-item/player-item.component';

@NgModule({
    imports: [SharedModule, PlayerRoutingModule],
    declarations: [PlayerListComponent, PlayerListItemComponent, PlayerItemComponent]
})
export class PlayerModule {
}
