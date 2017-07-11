import { NgDataTablePage } from './app.po';

describe('ng-data-table App', () => {
  let page: NgDataTablePage;

  beforeEach(() => {
    page = new NgDataTablePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
