import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { FieldListComponent } from './containers/field-list/field-list.component';
import { FieldItemComponent } from './containers/field-item/field-item.component';

const routes: Routes = [
  { path: '', component: FieldListComponent },
  {
    path: ':id',
    component: FieldItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FieldRoutingModule {}
