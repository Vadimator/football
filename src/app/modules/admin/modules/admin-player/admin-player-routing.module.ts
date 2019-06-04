import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminPlayerTableComponent } from './components/admin-player-table/admin-player-table.component';
import { AdminPlayerCreateComponent } from './components/admin-player-create/admin-player-create.component';

const routes: Routes = [
    {
        path: '',
        component: AdminPlayerTableComponent
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
