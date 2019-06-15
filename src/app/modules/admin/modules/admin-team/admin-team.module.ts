import { NgModule } from '@angular/core';

import { AdminSharedModule } from '../admin-shared/admin-shared.module';
import { AdminTeamRoutingModule } from './admin-team-routing.module';
import { AdminTeamComponent } from './components/admin-team/admin-team.component';
import { AdminTeamTableComponent } from './components/admin-team-table/admin-team-table.component';
import { AdminTeamCreateComponent } from './components/admin-team-create/admin-team-create.component';

@NgModule({
  imports: [AdminSharedModule, AdminTeamRoutingModule],
  declarations: [AdminTeamComponent, AdminTeamTableComponent, AdminTeamCreateComponent]
})
export class AdminTeamModule {}
