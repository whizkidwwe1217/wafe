import { Component, OnDestroy } from '@angular/core';
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wafe';
  isOnline: boolean = true;
  hasNewUpdates: boolean = false;

  constructor(private router: Router) {
    
  }

  checkNetworkConnection() {
    let offline = Observable.fromEvent(window, 'offline');
    let online = Observable.fromEvent(window, 'online');

    offline.subscribe(() => {
      this.isOnline = navigator.onLine;
    });

    online.subscribe(() => {
      this.isOnline = navigator.onLine;
    });
  }
}
