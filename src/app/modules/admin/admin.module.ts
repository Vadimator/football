import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '@shared/shared.module';

import { AdminContainerComponent } from './components/admin-container/admin-container.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminPairsComponent } from './components/admin-pairs/admin-pairs.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { AdminPairItemDirective } from './directives/admin-pair-item.directive';

@NgModule({
  imports: [SharedModule, AdminRoutingModule],
  declarations: [AdminContainerComponent, AdminLoginComponent, AdminComponent, AdminPairsComponent, AdminPairItemDirective],
  providers: [AdminAuthGuard]
})
export class AdminModule {}
