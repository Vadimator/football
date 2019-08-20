import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@shared/shared.module';
import { MatchRoutingModule } from './math-routing.module';

import { MatchListComponent } from './containers/match-list/match-list.component';
import { MatchItemComponent } from './containers/match-item/match-item.component';
import { MatchListItemComponent } from './components/match-list-item/match-list-item.component';
import { MatchItemDetailsComponent } from './components/match-item-details/match-item-details.component';
import { MatchItemFieldComponent } from './components/match-item-field/match-item-field.component';
import { MatchItemTeamsComponent } from './components/match-item-teams/match-item-teams.component';
import { MatchItemGoalsComponent } from './components/match-item-goals/match-item-goals.component';
import { MatchItemTeamComponent } from './components/match-item-team/match-item-team.component';
import { MatchEmptyComponent } from './components/match-empty/match-empty.component';
import { MatchEffect } from './store/match.effect';
import { MatchFacade } from './store/match.facade';
import { reducer } from './store/match.reducer';

@NgModule({
    imports: [
        SharedModule,
        MatchRoutingModule,
        StoreModule.forFeature('match', reducer),
        EffectsModule.forFeature([MatchEffect]),
    ],
    declarations: [
        MatchListComponent,
        MatchListItemComponent,
        MatchItemComponent,
        MatchItemDetailsComponent,
        MatchItemFieldComponent,
        MatchItemTeamsComponent,
        MatchItemTeamComponent,
        MatchItemGoalsComponent,
        MatchEmptyComponent
    ],
    providers: [MatchFacade]
})
export class MatchModule {}
