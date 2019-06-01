import { NgModule } from '@angular/core';
import { MatListModule, MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';

const modules = [MatListModule, MatInputModule, MatFormFieldModule, MatButtonModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class AngularMaterialModule {}
