import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminPlayerCreateComponent } from './components/admin-player-create/admin-player-create.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'player/create', component: AdminPlayerCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
