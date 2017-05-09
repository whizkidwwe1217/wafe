// Sytem Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// App Modules
import { ClarityModule } from "clarity-angular/clarity.module";

// App Components
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { AppRoutingModule } from "app/app.routing";
import { reducer } from "app/shared/reducers/page.reducer";
import { StoreModule } from "@ngrx/store";
import { AboutComponent } from "app/about/about.component";
import { PageNotFoundComponent } from "app/shared/utility-page/page-not-found.component";
import { RouterModule } from "@angular/router";
import { SecurityComponent } from "app/security/security.component";
import { PreferencesComponent } from "app/preferences/preferences.component";
import { GettingStartedComponent } from "app/getting-started/getting-started.component";

/* UX */
import { ShapeInputComponent } from "app/shared/ux/shape-input.component";
import { StepperComponent } from "app/shared/ux/stepper.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,

    SecurityComponent,
    PreferencesComponent,
    GettingStartedComponent,

    ShapeInputComponent,
    StepperComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ClarityModule.forRoot(),
    StoreModule.provideStore(reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
