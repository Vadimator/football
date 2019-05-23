import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
    imports: [SharedModule, AdminRoutingModule],
    declarations: [AdminComponent]
})
export class AdminModule {
}
