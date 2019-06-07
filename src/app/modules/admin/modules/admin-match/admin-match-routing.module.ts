import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminMatchCreateComponent } from './components/admin-match-create/admin-match-create.component';
import { AdminMatchComponent } from './components/admin-match/admin-match.component';

const routes: Routes = [
  {
    path: '',
    component: AdminMatchComponent
  },
  {
    path: 'create',
    component: AdminMatchCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminMatchRoutingModule {}
