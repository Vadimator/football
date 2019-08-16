import { NgModule } from '@angular/core';

import { AdminSharedModule } from '../admin-shared/admin-shared.module';
import { AdminUserRoutingModule } from './admin-user-routing.module';

import { AdminUserComponent } from './components/admin-user/admin-user.component';
import { AdminUserTableComponent } from './components/admin-user-table/admin-user-table.component';
import { AdminUserEditComponent } from './components/admin-user-edit/admin-user-edit.component';
import { AdminUserCreateComponent } from './components/admin-user-create/admin-user-create.component';

@NgModule({
    imports: [AdminSharedModule, AdminUserRoutingModule],
    declarations: [AdminUserComponent, AdminUserTableComponent, AdminUserEditComponent, AdminUserCreateComponent],
})
export class AdminUserModule {
}
