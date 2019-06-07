import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { AdminMatchRoutingModule } from './admin-match-routing.module';

import { AdminMatchCreateComponent } from './components/admin-match-create/admin-match-create.component';
import { AdminMatchComponent } from './components/admin-match/admin-match.component';
import { AdminMatchTableComponent } from './components/admin-match-table/admin-match-table.component';

@NgModule({
  imports: [SharedModule, AdminMatchRoutingModule],
  declarations: [AdminMatchCreateComponent, AdminMatchComponent, AdminMatchTableComponent]
})
export class AdminMatchModule {}
