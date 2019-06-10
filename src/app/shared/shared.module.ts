import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { UrlInterceptor } from './interceptors/url.interceptor';
import { AngularMaterialModule } from '../modules/material/angular-material.module';
import { ConfirmComponent } from './components/confirm/confirm.component';

const components = [ConfirmComponent];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AngularMaterialModule, RouterModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, AngularMaterialModule, RouterModule, ...components],
  declarations: components,
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true }],
  entryComponents: [ConfirmComponent]
})
export class SharedModule {}
