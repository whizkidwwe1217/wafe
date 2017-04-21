import { browser, element, by } from 'protractor';

export class WafePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.id('title')).getText();
  }
}
