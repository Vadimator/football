import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PlayerItemComponent } from './containers/player-item/player-item.component';
import { PlayersComponent } from './containers/players/players.component';

const routes: Routes = [
    { path: '', component: PlayersComponent },
    {
        path: ':id',
        component: PlayerItemComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlayerRoutingModule {}
