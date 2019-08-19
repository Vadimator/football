import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PlayerListComponent } from './containers/player-list/player-list.component';
import { PlayerItemComponent } from './containers/player-item/player-item.component';

const routes: Routes = [
    { path: '', component: PlayerListComponent },
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
