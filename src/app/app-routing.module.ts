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
                path: '',
                redirectTo: '/match',
                pathMatch: 'full'
            },
            { path: 'page-not-found', component: PageNotFoundComponent },
            { path: '**', redirectTo: '/page-not-found' }
        ]
    },
    {
        path: 'admin',
        loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
