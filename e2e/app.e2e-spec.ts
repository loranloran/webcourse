import { Lesson3hwPage } from './app.po';

describe('lesson3hw App', function() {
  let page: Lesson3hwPage;

  beforeEach(() => {
    page = new Lesson3hwPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
