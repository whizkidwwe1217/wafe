import { Page } from './page';

export class PageRegistry {
    private pages: Page[] = [];
    private static _instance: PageRegistry;

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    private constructor() {
        this.pages.push(new Page("Dashboard", "dashboard"));
        this.pages.push(new Page("About", "about"));
        let pgPlayground = new Page("Playground", "playground");
        this.pages.push(pgPlayground);
        let pgNgRx = new Page("Ngrx", "ngrx");
        let pgFormEditor = new Page("Form Editor", "form_editor");
        pgPlayground.subPages.push(pgNgRx);
        pgPlayground.subPages.push(pgFormEditor);
        var pgCore: Page = new Page("Core", "core");
        this.pages.push(pgCore);
        var pgSecurity: Page = new Page("Security", "security");
        this.pages.push(pgSecurity);
        pgSecurity.subPages.push(new Page("Users", "users"));
        pgSecurity.subPages.push(new Page("Roles", "roles"));
    }

    getPages(): Page[] {
        return this.pages;
    }
}