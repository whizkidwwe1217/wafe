import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PageNotFoundComponent } from "app/shared/utility-page/page-not-found.component";
import { AboutComponent } from "app/about/about.component";
import { SecurityComponent } from "app/security/security.component";

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: 'home', component: HomeComponent, 
        children: [
            { path: 'security', component: SecurityComponent },
            { path: 'about', component: AboutComponent },
            { path: '**', component: PageNotFoundComponent }
        ] 
    },
    { path: 'dashboard', component: DashboardComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}