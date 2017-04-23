import { Page } from './page';

export class PageRegistry {
    private pages: Page[] = [];
    private static _instance: PageRegistry;

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    private constructor() {
        var pgSecurity: Page = new Page("Security", "security");
        pgSecurity.subPages.push(new Page("Users", "users", "user"));
        pgSecurity.subPages.push(new Page("Roles", "roles"));

        this.pages.push(new Page("Home", "home", "home"));
        this.pages.push(pgSecurity);
        this.pages.push(new Page("About", "about"));
    }

    getPages(): Page[] {
        return this.pages;
    }
}