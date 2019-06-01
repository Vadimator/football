import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [SharedModule, AdminRoutingModule],
  declarations: [AdminComponent]
})
export class AdminModule {}
