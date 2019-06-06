import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamResolver } from './services/team.resolver';
import { TeamItemComponent } from './components/team-item/team-item.component';

const routes: Routes = [
    { path: '', component: TeamListComponent },
    {
        path: ':id',
        component: TeamItemComponent,
        resolve: {
            team: TeamItemComponent
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [TeamResolver]
})
export class TeamRoutingModule {
}
