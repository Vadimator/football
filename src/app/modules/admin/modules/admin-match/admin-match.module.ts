import { NgModule } from '@angular/core';

import { AdminSharedModule } from '../admin-shared/admin-shared.module';
import { AdminMatchRoutingModule } from './admin-match-routing.module';

import { AdminMatchCreateComponent } from './components/admin-match-create/admin-match-create.component';
import { AdminMatchComponent } from './components/admin-match/admin-match.component';
import { AdminMatchTableComponent } from './components/admin-match-table/admin-match-table.component';
import { AdminMatchPlayerSelectComponent } from './components/admin-match-player-select/admin-match-player-select.component';

@NgModule({
  imports: [AdminSharedModule, AdminMatchRoutingModule],
  declarations: [AdminMatchCreateComponent, AdminMatchComponent, AdminMatchTableComponent, AdminMatchPlayerSelectComponent]
})
export class AdminMatchModule {}
