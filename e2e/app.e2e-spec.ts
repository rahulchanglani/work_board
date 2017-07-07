import { SimpleWorkBoardPage } from './app.po';

describe('simple-work-board App', () => {
  let page: SimpleWorkBoardPage;

  beforeEach(() => {
    page = new SimpleWorkBoardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
