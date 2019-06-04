import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// components
import { AdminComponent } from './components/admin/admin.component';
import { AdminPlayerCreateComponent } from './components/admin-player-create/admin-player-create.component';
import { AdminMatchCreateComponent } from './components/admin-match-create/admin-match-create.component';
import { AdminPlayerTableComponent } from './components/admin-player-table/admin-player-table.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
// guards
import { AdminAuthGuard } from './guards/admin-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AdminAuthGuard],
    children: [
      { path: 'player', component: AdminPlayerTableComponent },
      { path: 'player/create', component: AdminPlayerCreateComponent },
      { path: 'match/create', component: AdminMatchCreateComponent }
    ]
  },
  { path: 'login', component: AdminLoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
