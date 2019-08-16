import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@shared/shared.module';
import { MatchRoutingModule } from './math-routing.module';

import { MatchListComponent } from './containers/match-list/match-list.component';
import { MatchListItemComponent } from './components/match-list-item/match-list-item.component';
import { MatchItemComponent } from './containers/match-item/match-item.component';
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
    declarations: [MatchListComponent, MatchListItemComponent, MatchItemComponent],
    providers: [MatchFacade]
})
export class MatchModule {}
