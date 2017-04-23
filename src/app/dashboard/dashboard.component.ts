import { Component } from "@angular/core";

@Component({
    selector: 'wfe-dashboard',
    templateUrl: './dashboard.component.html',
    host: {
        "id": "main-container",
        "[class.content-container]": "true"
    }
})
export class DashboardComponent {
    
}