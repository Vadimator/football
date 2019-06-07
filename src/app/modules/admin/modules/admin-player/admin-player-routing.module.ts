import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PlayerResolver } from '@shared/resolvers/player.resolver';
import { AdminPlayerCreateComponent } from './components/admin-player-create/admin-player-create.component';
import { AdminPlayerComponent } from './components/admin-player/admin-player.component';
import { AdminPlayerEditComponent } from './components/admin-player-edit/admin-player-edit.component';

const routes: Routes = [
    {
        path: '',
        component: AdminPlayerComponent
    },
    {
        path: 'create',
        component: AdminPlayerCreateComponent
    },
    {
        path: ':id',
        component: AdminPlayerEditComponent,
        resolve: {
            player: PlayerResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminPlayerRoutingModule {
}
