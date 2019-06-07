import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '@shared/shared.module';

import { AdminComponent } from './components/admin/admin.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';

@NgModule({
  imports: [SharedModule, AdminRoutingModule],
  declarations: [AdminComponent, AdminLoginComponent],
  providers: [AdminAuthGuard]
})
export class AdminModule {}
