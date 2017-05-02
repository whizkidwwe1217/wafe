import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppStore } from "app/shared/app.store";
import { Page } from "app/shared/page";

@Component({
    selector: 'wfe-preferences',
    templateUrl: './preferences.component.html'
})
export class PreferencesComponent {
    constructor(private router: Router, private store: Store<AppStore>) {
        
    }

    removePreference() {
        this.store.dispatch({
            type: 'ADD_PAGE',
            payload: new Page("Hello", "hello")
        });
    }
}