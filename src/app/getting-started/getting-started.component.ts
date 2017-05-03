import { Component } from "@angular/core";

@Component({
    selector: 'wfe-getting-started',
    styles: [
        `

        `
    ],
    template:
    `
    <h1>Getting Started</h1>
    <div class="row flex-items-xs-center">
        <div class="col-sm-6">
            <p>webpack is a tool to build JavaScript modules in your application. To start using webpack from its cli or api, follow the Installation instructions. webpack simplifies your workflow by quickly constructing a dependency graph of your application and bundling them in the right order. webpack can be configured to customise optimisations to your code, to split vendor/css/js code for production, run a development server that hot-reloads your code without page refresh and many such cool features. Learn more about why you should use webpack.</p>
        </div>
        <div class="col-sm-4" style="text-align: center">
            <h1 style="color: #483654">
                <span>
                    <clr-icon size=240 shape="blocks-group"></clr-icon>
                     kodeblocks
                </span>
            </h1>
        </div>
    </div>
    `
})
export class GettingStartedComponent {

}