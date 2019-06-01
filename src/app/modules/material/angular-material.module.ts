import { NgModule } from '@angular/core';
import { MatListModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatSelectModule } from '@angular/material';

const modules = [MatListModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatSelectModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class AngularMaterialModule {}
