import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchListComponent } from './components/match-list/match-list.component';
import { MatchRoutingModule } from './math-routing.module';

@NgModule({
  declarations: [MatchListComponent],
  imports: [CommonModule, MatchRoutingModule]
})
export class MatchModule {}
