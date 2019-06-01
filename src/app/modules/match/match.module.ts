import { NgModule } from '@angular/core';

import { MatchRoutingModule } from './math-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { MatchListComponent } from './components/match-list/match-list.component';
import { MatchListItemComponent } from './components/match-list-item/match-list-item.component';
import { MatchItemComponent } from './components/match-item/match-item.component';
import { MatchService } from './services/match.service';

@NgModule({
  declarations: [MatchListComponent, MatchListItemComponent, MatchItemComponent],
  imports: [SharedModule, MatchRoutingModule],
  providers: [MatchService]
})
export class MatchModule {}
