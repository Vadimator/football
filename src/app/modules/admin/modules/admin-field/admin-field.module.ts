import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { AdminMatchRoutingModule } from './admin-field-routing.module';

import { AdminFieldComponent } from './components/admin-field/admin-field.component';

@NgModule({
  imports: [SharedModule, AdminMatchRoutingModule],
  declarations: [AdminFieldComponent]
})
export class AdminFieldModule {}
