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
import { PageReducer } from "app/shared/reducers/page.reducer";
import { StoreModule } from "@ngrx/store";
import { AboutComponent } from "app/about/about.component";
import { PageNotFoundComponent } from "app/shared/utility-page/page-not-found.component";
import { RouterModule } from "@angular/router";
import { SecurityComponent } from "app/security/security.component";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,

    SecurityComponent
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
    StoreModule.provideStore({ PageReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
