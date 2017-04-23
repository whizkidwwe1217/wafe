import { Observable } from 'rxjs';
import { Store, Action, ActionReducer } from '@ngrx/store';
import { select } from '@ngrx/core';
import { Page } from "app/shared/page";

export const PageReducer = (state: Page[], action: Action): Page[] => {
    switch (action.type) {
        case "GET_PAGES":
            return action.payload;
        default:
            return state;
    }
}