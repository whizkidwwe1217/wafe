import { Page } from './page';

export class PageRegistry {
    private pages: Page[] = [];
    private static _instance: PageRegistry;

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    private constructor() {                
        let pgSettings = new Page("Settings", "settings");
        let pgPreferences = new Page("Preferences", "preferences", "slider");
        let pgSecurity = new Page("Security", "security", "shield");
        let pgPlugins = new Page("Plugins", "plugins", "plugin");
        pgSettings.subPages.push(pgPreferences);
        pgSettings.subPages.push(pgSecurity);
        pgSettings.subPages.push(pgPlugins);

        this.pages.push(new Page("Getting Started", "getting started"));
        this.pages.push(pgSettings);
        this.pages.push(new Page("About", "about"));
    }

    getPages(): Page[] {
        return this.pages;
    }
}