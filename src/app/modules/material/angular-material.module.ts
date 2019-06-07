import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';

const modules = [
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatDialogModule
];

@NgModule({
    imports: modules,
    exports: modules
})
export class AngularMaterialModule {
}
