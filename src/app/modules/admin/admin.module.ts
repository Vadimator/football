import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { AdminComponent } from './components/admin/admin.component';
import { AdminPlayerCreateComponent } from './components/admin-player-create/admin-player-create.component';
import { AdminMatchCreateComponent } from './components/admin-match-create/admin-match-create.component';
import { AdminPlayerTableComponent } from './components/admin-player-table/admin-player-table.component';

@NgModule({
  imports: [SharedModule, AdminRoutingModule],
  declarations: [AdminComponent, AdminPlayerCreateComponent, AdminMatchCreateComponent, AdminPlayerTableComponent]
})
export class AdminModule {}
