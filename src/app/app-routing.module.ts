import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: 'match',
        loadChildren: './modules/match/match.module#MatchModule'
    },
    {
        path: 'player',
        loadChildren: './modules/player/player.module#PlayerModule'
    },
    {
        path: '',
        redirectTo: '/match',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
