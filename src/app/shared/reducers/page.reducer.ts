import { Observable } from 'rxjs';
import { Store, Action, ActionReducer, combineReducers } from '@ngrx/store';
import { select, compose } from '@ngrx/core';

import { Page } from "app/shared/page";

export function PageReducer (state: Page[], action: Action): Page[] {
    switch (action.type) {
        case "GET_PAGES":
            return action.payload;
        default:
            return state;
    }
}

export const reducers = {
    PageReducer
};

export const rootReducer = compose(combineReducers)(reducers)
export function reducer(state, action) {
    return rootReducer(state, action);
}