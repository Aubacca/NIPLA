import { NgAlpin2Page } from './app.po';

describe('ng-alpin2 App', () => {
  let page: NgAlpin2Page;

  beforeEach(() => {
    page = new NgAlpin2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
