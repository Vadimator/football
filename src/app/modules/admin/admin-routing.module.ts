import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// components
import { AdminComponent } from './components/admin/admin.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
// guards
import { AdminAuthGuard } from './guards/admin-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AdminAuthGuard],
    children: [
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
      }
    ]
  },
  { path: 'login', component: AdminLoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
