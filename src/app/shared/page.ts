export class Page {
    subPages: Page[];
    name: string;
    route: string;

    constructor(name: string, route: string) {
        this.subPages = [];
        this.name = name;
        this.route = route;
    }
}