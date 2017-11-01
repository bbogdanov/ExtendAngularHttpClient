import { ApplicationHttpClient } from './http-client';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private httpClient: ApplicationHttpClient) {

  }

  public ngOnInit() {
    this.httpClient.Get('').subscribe();
  }
}
