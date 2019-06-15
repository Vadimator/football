import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { UrlInterceptor } from './interceptors/url.interceptor';
import { AngularMaterialModule } from '../modules/material/angular-material.module';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PlayerListPipe } from './pipes/player-list.pipe';

const components = [ConfirmComponent, LoaderComponent];
const pipes = [PlayerListPipe];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AngularMaterialModule, RouterModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule,
    ...components,
    ...pipes
  ],
  declarations: [...components, ...pipes],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true }],
  entryComponents: [ConfirmComponent]
})
export class SharedModule {}
