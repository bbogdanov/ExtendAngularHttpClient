import { ApplicationHttpClient, applicationHttpClientCreator } from './http-client';
import { ServerLocationInterceptor } from './server-location.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpHandler } from '@angular/common/http';

import { AppComponent } from './app.component';

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
      deps: [HttpHandler]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
