import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material';

const modules = [MatListModule];

@NgModule({
    imports: modules,
    exports: modules
})
export class AngularMaterialModule {
}
