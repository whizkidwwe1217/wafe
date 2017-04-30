import { Page } from './page';

export class PageRegistry {
    private pages: Page[] = [];
    private static _instance: PageRegistry;

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    private constructor() {
        let pgSecurity: Page = new Page("Security", "security");
        
        this.pages.push(new Page("Home", "home", "home"));
        let pgSettings = new Page("Settings", "settings");
        pgSettings.subPages.push(pgSecurity);
        this.pages.push(pgSettings);
        this.pages.push(new Page("About", "about"));
    }

    getPages(): Page[] {
        return this.pages;
    }
}