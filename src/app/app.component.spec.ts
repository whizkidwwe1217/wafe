import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { APP_BASE_HREF } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { ClarityModule } from "clarity-angular/clarity.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { By } from "@angular/platform-browser";
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { HomeComponent } from "app/home/home.component";

describe('AppComponent', () => {
  let fixture, app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        RouterTestingModule,
        
        ClarityModule.forRoot()
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        DashboardComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('should have a title called wafe', async(() => {
    expect(app.title).toEqual('wafe');
  }));
});
