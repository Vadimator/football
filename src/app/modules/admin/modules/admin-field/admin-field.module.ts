import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { AdminFieldRoutingModule } from './admin-field-routing.module';

import { AdminFieldComponent } from './components/admin-field/admin-field.component';
import { AdminFieldTableComponent } from './components/admin-field-table/admin-field-table.component';

@NgModule({
  imports: [SharedModule, AdminFieldRoutingModule],
  declarations: [AdminFieldComponent, AdminFieldTableComponent]
})
export class AdminFieldModule {}
