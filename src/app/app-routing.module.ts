import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';

const routes: Routes = [
    {
        path: 'admin',
        loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
    },
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
                path: '',
                redirectTo: '/match',
                pathMatch: 'full'
            },
            {
                path: 'page-not-found',
                loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule)
            },
            { path: '**', redirectTo: '/page-not-found' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
