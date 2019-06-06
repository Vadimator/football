import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { TeamRoutingModule } from './team-routing.module';

import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamListItemComponent } from './components/team-list-item/team-list-item.component';
import { TeamItemComponent } from './components/team-item/team-item.component';

@NgModule({
  imports: [SharedModule, TeamRoutingModule],
  declarations: [TeamListComponent, TeamListItemComponent, TeamItemComponent]
})
export class TeamModule {}
