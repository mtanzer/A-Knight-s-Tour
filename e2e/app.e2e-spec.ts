import { ConstantTherapyPage } from './app.po';

describe('constant-therapy App', () => {
  let page: ConstantTherapyPage;

  beforeEach(() => {
    page = new ConstantTherapyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
