import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatchListComponent } from './containers/match-list/match-list.component';
import { MatchItemComponent } from './containers/match-item/match-item.component';

const routes: Routes = [
  { path: '', component: MatchListComponent },
  {
    path: ':id',
    component: MatchItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchRoutingModule {}
