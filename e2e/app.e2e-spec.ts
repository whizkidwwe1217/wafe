import { WafePage } from './app.po';

describe('wafe App', () => {
  let page: WafePage;

  beforeEach(() => {
    page = new WafePage();
  });

  it('should have a title called wafe', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('wafe');
  });
});
