import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatchListComponent } from './components/match-list/match-list.component';
import { MatchItemComponent } from './components/match-item/match-item.component';
import { MatchResolver } from './services/match.resolver';

const routes: Routes = [
    { path: '', component: MatchListComponent },
    {
        path: ':id',
        component: MatchItemComponent,
        resolve: {
            match: MatchResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MatchRoutingModule {
}
