import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@shared/shared.module';
import { FieldRoutingModule } from './field-routing.module';

import { FieldListComponent } from './containers/field-list/field-list.component';
import { FieldItemComponent } from './containers/field-item/field-item.component';
import { FieldListItemComponent } from './components/field-list-item/field-list-item.component';
import { FieldItemDetailsComponent } from './components/field-item-details/field-item-details.component';
import { FieldEffect } from './store/field.effect';
import { reducer } from './store/field.reducer';
import { FieldFacade } from './store/field.facade';

@NgModule({
    imports: [
        SharedModule,
        FieldRoutingModule,
        StoreModule.forFeature('field', reducer),
        EffectsModule.forFeature([FieldEffect])
    ],
    declarations: [FieldListComponent, FieldListItemComponent, FieldItemComponent, FieldItemDetailsComponent],
    providers: [FieldFacade]
})
export class FieldModule {}
