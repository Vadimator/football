import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// components
import { AdminContainerComponent } from './components/admin-container/admin-container.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminComponent } from './components/admin/admin.component';
// guards
import { AdminAuthGuard } from './guards/admin-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminContainerComponent,
    canActivate: [AdminAuthGuard],
    children: [
      {
        path: '',
        component: AdminComponent
      },
      {
        path: 'player',
        loadChildren: () => import('./modules/admin-player/admin-player.module').then(m => m.AdminPlayerModule)
      },
      {
        path: 'match',
        loadChildren: () => import('./modules/admin-match/admin-match.module').then(m => m.AdminMatchModule)
      },
      {
        path: 'team',
        loadChildren: () => import('./modules/admin-team/admin-team.module').then(m => m.AdminTeamModule)
      },
      {
        path: 'field',
        loadChildren: () => import('./modules/admin-field/admin-field.module').then(m => m.AdminFieldModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./modules/admin-user/admin-user.module').then(m => m.AdminUserModule)
      }
    ]
  },
  { path: 'login', component: AdminLoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
