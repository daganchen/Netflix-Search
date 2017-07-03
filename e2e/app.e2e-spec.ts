import { AngularNetflixAPIPage } from './app.po';

describe('angular-netflix-api App', () => {
  let page: AngularNetflixAPIPage;

  beforeEach(() => {
    page = new AngularNetflixAPIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
