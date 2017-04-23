import { Component } from "@angular/core";

@Component({
    selector: 'wfe-about',
    template:
    `
    <h1>About Page</h1>
    <p>
    State management within Angular started out as a single celled organism if you will in the form of a single controller managing all the state for the application. If this is a single page application, one controller makes sense right? We emerged out of the ice age by starting to group our views and controllers into smaller, self-contained units either within a directive or a route. This was a vast improvement, but there was still the problem of managing complex state within our applications. It was not uncommon for us to have bits and pieces of state strewn across our application tucked inside of controllers, services, routes, directives, and occasionally, in our templates. Mutable state in itself is not inherently evil but shared mutable state is a recipe for disaster.
    </p>
    `
})
export class AboutComponent {}