import { RxjsChatPage } from './app.po';

describe('rxjs-chat App', () => {
  let page: RxjsChatPage;

  beforeEach(() => {
    page = new RxjsChatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
