import { Component, OnInit } from "@angular/core";
import { Page } from "app/shared/page";
import { PageService } from "app/shared/page-service";
import { Store } from "@ngrx/store";
import { AppStore } from "app/shared/app.store";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";

@Component({
    selector: 'wfe-home',
    templateUrl: './home.component.html',
    host: {
        "id": "main-container",
        "[class.content-container]": "true"
    },
    providers: [PageService]
})
export class HomeComponent implements OnInit {
    // pages: Observable<Page[]>;
    /**
     * use this temporarily as there's a bug in ngrx/store: not working in production mode
     * @Todo: Put the async pipe back to the *ngFor when bug in ngrx store is fixed.
     */
    pages: Page[]; 

    constructor(private router: Router, private store: Store<AppStore>, private pageService: PageService) {
        // this.pages = this.store.select("PageReducer");
        // this.pages.subscribe((data) => {
        //     console.log(data);
        // });
    }
    
    ngOnInit(): void {
        this.pageService.getPages().then((p) => {
            // console.log(p);
            // this.store.dispatch({ type: "GET_PAGES", payload: p });
            this.pages = p;
        });
    }
}