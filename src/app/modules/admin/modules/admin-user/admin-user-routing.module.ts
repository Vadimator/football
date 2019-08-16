import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { UserResolver } from '@shared/resolvers/user.resolver';
import { AdminUserComponent } from './components/admin-user/admin-user.component';
import { AdminUserCreateComponent } from './components/admin-user-create/admin-user-create.component';
import { AdminUserEditComponent } from './components/admin-user-edit/admin-user-edit.component';

const routes: Routes = [
    {
        path: '',
        component: AdminUserComponent
    },
    {
        path: 'create',
        component: AdminUserCreateComponent
    },
    {
        path: ':id',
        component: AdminUserEditComponent,
        resolve: {
            player: UserResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminUserRoutingModule {}
