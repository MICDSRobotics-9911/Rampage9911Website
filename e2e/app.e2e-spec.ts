import { Technoramic5190Page } from './app.po';

describe('technoramic5190 App', () => {
  let page: Technoramic5190Page;

  beforeEach(() => {
    page = new Technoramic5190Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
