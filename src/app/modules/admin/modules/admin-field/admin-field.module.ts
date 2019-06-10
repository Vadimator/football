import { NgModule } from '@angular/core';

import { AdminSharedModule } from '../admin-shared/admin-shared.module';
import { AdminFieldRoutingModule } from './admin-field-routing.module';

import { AdminFieldComponent } from './components/admin-field/admin-field.component';
import { AdminFieldTableComponent } from './components/admin-field-table/admin-field-table.component';
import { AdminFieldCreateComponent } from './components/admin-field-create/admin-field-create.component';
import { AdminFieldEditComponent } from './components/admin-field-edit/admin-field-edit.component';

@NgModule({
  imports: [AdminSharedModule, AdminFieldRoutingModule],
  declarations: [AdminFieldComponent, AdminFieldTableComponent, AdminFieldCreateComponent, AdminFieldEditComponent]
})
export class AdminFieldModule {}
