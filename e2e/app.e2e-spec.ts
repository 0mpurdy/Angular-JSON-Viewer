import { AngularJsonViewerPage } from './app.po';

describe('angular-json-viewer App', function() {
  let page: AngularJsonViewerPage;

  beforeEach(() => {
    page = new AngularJsonViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
