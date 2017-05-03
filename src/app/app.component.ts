import { Component, OnDestroy } from '@angular/core';
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";
import { Router } from "@angular/router";
import { PageService } from "app/shared/page-service";
import { Store } from "@ngrx/store";
import { AppStore } from "app/shared/app.store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PageService]
})
export class AppComponent {
  title = 'kodeblocks';
  isOnline: boolean = true;
  hasNewUpdates: boolean = false;

  constructor(private router: Router, private store: Store<AppStore>, private pageService: PageService) {
    this.pageService.getPages().then((p) => {
      this.store.dispatch({ type: "GET_PAGES", payload: p });
    });
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
