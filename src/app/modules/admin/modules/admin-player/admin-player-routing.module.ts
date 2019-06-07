import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminPlayerCreateComponent } from './components/admin-player-create/admin-player-create.component';
import { AdminPlayerComponent } from './components/admin-player/admin-player.component';

const routes: Routes = [
    {
        path: '',
        component: AdminPlayerComponent
    },
    {
        path: 'create',
        component: AdminPlayerCreateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminPlayerRoutingModule {
}
