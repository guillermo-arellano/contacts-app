import { SolsticeContactsAppPage } from './app.po';

describe('solstice-contacts-app App', () => {
  let page: SolsticeContactsAppPage;

  beforeEach(() => {
    page = new SolsticeContactsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
