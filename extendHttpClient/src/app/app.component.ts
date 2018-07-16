import { ApplicationHttpClient } from './http-client';
import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private httpClient: HttpClient) {
    console.log('Is HttpClient instance of ApplicationHttpClient: ', httpClient instanceof ApplicationHttpClient);
  }

  public ngOnInit() {
    this.httpClient.Get('').subscribe();
  }
}
