import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'match',
        loadChildren: () => import('./modules/match/match.module').then(m => m.MatchModule)
      },
      {
        path: 'player',
        loadChildren: () => import('./modules/player/player.module').then(m => m.PlayerModule)
      },
      {
        path: 'field',
        loadChildren: () => import('./modules/field/field.module').then(m => m.FieldModule)
      },
      {
        path: 'team',
        loadChildren: () => import('./modules/team/team.module').then(m => m.TeamModule)
      },
      {
        path: '',
        redirectTo: '/match',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
