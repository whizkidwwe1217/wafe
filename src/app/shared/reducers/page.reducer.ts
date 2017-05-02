import { Observable } from 'rxjs';
import { Store, Action, ActionReducer, combineReducers } from '@ngrx/store';
import { select, compose } from '@ngrx/core';

import { Page } from "app/shared/page";

export const pagesState: Array<Page> = [];

export function PageReducer(state: Array<Page> = pagesState, action: Action) {
    switch (action.type) {
        case "GET_PAGES":
            return action.payload;
        case "ADD_PAGE":
            return [...state, action.payload];
        case "DELETE_PAGE":
            return state.filter((x) => {
                return x.name !== action.payload;
            });
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