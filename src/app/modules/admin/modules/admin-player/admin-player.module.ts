import { NgModule } from '@angular/core';

import { AdminSharedModule } from '../admin-shared/admin-shared.module';
import { AdminPlayerRoutingModule } from './admin-player-routing.module';

import { AdminPlayerTableComponent } from './components/admin-player-table/admin-player-table.component';
import { AdminPlayerCreateComponent } from './components/admin-player-create/admin-player-create.component';
import { AdminPlayerComponent } from './components/admin-player/admin-player.component';
import { AdminPlayerEditComponent } from './components/admin-player-edit/admin-player-edit.component';

@NgModule({
    imports: [AdminSharedModule, AdminPlayerRoutingModule],
    declarations: [AdminPlayerTableComponent, AdminPlayerCreateComponent, AdminPlayerComponent, AdminPlayerEditComponent],
})
export class AdminPlayerModule {
}
