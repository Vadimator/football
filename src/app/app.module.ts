import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app/app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, MainComponent, FooterComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, SharedModule, HttpClientModule, FlexLayoutModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
