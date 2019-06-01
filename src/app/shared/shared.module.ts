import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { UrlInterceptor } from './interceptors/url.interceptor';
import { AngularMaterialModule } from '../modules/material/angular-material.module';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AngularMaterialModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, AngularMaterialModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true }]
})
export class SharedModule {}
