import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app/app.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { environment } from '../environments/environment';
import { metaReducers, ROOT_REDUCERS } from './store/reducers';
import { UserEffect } from './store/effects/user.effect';

@NgModule({
    declarations: [AppComponent, MainComponent, FooterComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        StoreModule.forRoot(ROOT_REDUCERS, {
            metaReducers,
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
                strictStateSerializability: true,
                strictActionSerializability: true
            }
        }),
        EffectsModule.forRoot([UserEffect]),
        StoreDevtoolsModule.instrument({
            // In a production build you would want to disable the Store Devtools
            logOnly: environment.production
        })
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
