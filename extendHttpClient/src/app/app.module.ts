import { ApplicationHttpClient, applicationHttpClientCreator } from './http-client';
import { ServerLocationInterceptor } from './server-location.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ServerLocationInterceptor, multi: true},
    {
      provide: ApplicationHttpClient,
      useFactory: applicationHttpClientCreator,
      deps: [HttpClient]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
