import { NgModule } from '@angular/core';
import {
  MatListModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatSelectModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule
} from '@angular/material';

const modules = [
  MatListModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatSelectModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class AngularMaterialModule {}
