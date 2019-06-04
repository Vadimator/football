import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { TeamRoutingModule } from './team-routing.module';
import { TeamListComponent } from './components/team-list/team-list.component';

@NgModule({
  imports: [SharedModule, TeamRoutingModule],
  declarations: [TeamListComponent]
})
export class TeamModule {}
