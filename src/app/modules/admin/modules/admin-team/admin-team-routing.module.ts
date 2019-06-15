import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminTeamCreateComponent } from './components/admin-team-create/admin-team-create.component';
import { AdminTeamComponent } from './components/admin-team/admin-team.component';

const routes: Routes = [
  {
    path: '',
    component: AdminTeamComponent
  },
  {
    path: 'create',
    component: AdminTeamCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTeamRoutingModule {}
