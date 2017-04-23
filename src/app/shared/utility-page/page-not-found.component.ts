import { Component } from "@angular/core";

@Component({
    selector: 'wfe-page-not-found',
    styles: [
        `
        .block-container {
            margin: 0 auto;
            text-align: center;
        }
        `
    ],
    template:
    `
    <div class="block-container">
        <h1>Error 404</h1>
        <h2>Page not found</h2>
    </div>
    `,
    host: {
        "id": "main-container",
        "[class.content-container]": "true"
    }
})
export class PageNotFoundComponent { }