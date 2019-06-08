import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { FieldResolver } from '@shared/resolvers/field.resolver';
import { FieldListComponent } from './components/field-list/field-list.component';
import { FieldItemComponent } from './components/field-item/field-item.component';

const routes: Routes = [
  { path: '', component: FieldListComponent },
  {
    path: ':id',
    component: FieldItemComponent,
    resolve: {
      field: FieldResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FieldRoutingModule {}
