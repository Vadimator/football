import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';

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
    MatDialogModule,
    DragDropModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    LayoutModule
];

@NgModule({
    exports: modules
})
export class AngularMaterialModule {
}
