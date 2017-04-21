import { WafePage } from './app.po';

describe('wafe App', () => {
  let page: WafePage;

  beforeEach(() => {
    page = new WafePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('wafe');
  });
});
