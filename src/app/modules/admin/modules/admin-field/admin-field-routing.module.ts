import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminFieldComponent } from './components/admin-field/admin-field.component';

const routes: Routes = [
  {
    path: '',
    component: AdminFieldComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminMatchRoutingModule {}
