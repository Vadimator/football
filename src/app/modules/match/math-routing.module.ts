import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatchListComponent } from './containers/match-list/match-list.component';
import { MatchItemComponent } from './containers/match-item/match-item.component';
import { MatchGuard } from './guards/match.guard';

const routes: Routes = [
  { path: '', component: MatchListComponent },
  {
    path: ':id',
    component: MatchItemComponent,
    canActivate: [MatchGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [MatchGuard]
})
export class MatchRoutingModule {}
