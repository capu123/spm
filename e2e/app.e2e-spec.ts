import { SPMPage } from './app.po';

describe('spm App', function() {
  let page: SPMPage;

  beforeEach(() => {
    page = new SPMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
