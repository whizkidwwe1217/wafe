export class Page {
    subPages: Array<Page>;
    name: string;
    route: string;
    icon: string;

    constructor(name: string, route: string, icon: string = "application") {
        this.subPages = [];
        this.name = name;
        this.route = route;
        this.icon = icon;
    }
}