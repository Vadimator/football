import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FieldRoutingModule } from './field-routing.module';

import { FieldListComponent } from './components/field-list/field-list.component';
import { FieldListItemComponent } from './components/field-list-item/field-list-item.component';
import { FieldItemComponent } from './components/field-item/field-item.component';

@NgModule({
    imports: [SharedModule, FieldRoutingModule],
    declarations: [FieldListComponent, FieldListItemComponent, FieldItemComponent]
})
export class FieldModule {
}
