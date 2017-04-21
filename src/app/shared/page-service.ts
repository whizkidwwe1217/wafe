import { Injectable } from '@angular/core';
import { Page } from './page';
import { PageRegistry } from './page-registry';

@Injectable()
export class PageService {
    getPages(): Promise<Page[]> {
        return Promise.resolve(PageRegistry.Instance.getPages());
    }

    /**
     * This is a test data to mock a slow connection.
     */
    getPagesSlowly(): Promise<Page[]> {
        return new Promise(p => setTimeout(p, 2000)).then(() => PageRegistry.Instance.getPages());
    }
}