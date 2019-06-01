import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminComponent } from './components/admin/admin.component';
import { AdminPlayerCreateComponent } from './components/admin-player-create/admin-player-create.component';
import { AdminMatchCreateComponent } from './components/admin-match-create/admin-match-create.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'player/create', component: AdminPlayerCreateComponent },
  { path: 'match/create', component: AdminMatchCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
