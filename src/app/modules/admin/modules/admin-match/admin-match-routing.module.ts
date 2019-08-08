import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminMatchCreateComponent } from './components/admin-match-create/admin-match-create.component';
import { AdminMatchComponent } from './components/admin-match/admin-match.component';
import { AdminMatchEditComponent } from './components/admin-match-edit/admin-match-edit.component';
import { MatchResolver } from '@shared/resolvers/match.resolver';

const routes: Routes = [
  {
    path: '',
    component: AdminMatchComponent
  },
  {
    path: 'create',
    component: AdminMatchCreateComponent
  },
  {
    path: ':id',
    component: AdminMatchEditComponent,
    resolve: {
      match: MatchResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminMatchRoutingModule {}
