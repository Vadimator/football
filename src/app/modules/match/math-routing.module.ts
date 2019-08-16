import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatchResolver } from '@shared/resolvers/match.resolver';
import { MatchListComponent } from './containers/match-list/match-list.component';
import { MatchItemComponent } from './components/match-item/match-item.component';

const routes: Routes = [
  { path: '', component: MatchListComponent },
  {
    path: ':id',
    component: MatchItemComponent,
    resolve: {
      match: MatchResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchRoutingModule {}
