import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

import localEs from '@angular/common/locales/es-CO';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';


registerLocaleData(localEs)
registerLocaleData(localFr)


@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
        {provide: LOCALE_ID, useValue:'es-CO' }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRouterModule,
        SharedModule ,
        VentasModule 
    ]
})
export class AppModule { }
