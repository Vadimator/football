import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { FieldResolver } from '@shared/resolvers/field.resolver';
import { AdminFieldCreateComponent } from './components/admin-field-create/admin-field-create.component';
import { AdminFieldComponent } from './components/admin-field/admin-field.component';
import { AdminFieldEditComponent } from './components/admin-field-edit/admin-field-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AdminFieldComponent
  },
  {
    path: 'create',
    component: AdminFieldCreateComponent
  },
  {
    path: ':id',
    component: AdminFieldEditComponent,
    resolve: {
      field: FieldResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminFieldRoutingModule {}
