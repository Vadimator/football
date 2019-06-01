import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PlayerListComponent } from './component/player-list/player-list.component';
import { PlayerItemComponent } from './component/player-item/player-item.component';
import { PlayerResolver } from './services/player.resolver';

const routes: Routes = [
  { path: '', component: PlayerListComponent },
  {
    path: ':id',
    component: PlayerItemComponent,
    resolve: {
      player: PlayerResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PlayerResolver]
})
export class PlayerRoutingModule {}
