import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PageEffects {
    constructor(private http: Http, private action$: Actions) {

    }

    
}