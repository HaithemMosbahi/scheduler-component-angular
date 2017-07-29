import { SchedulerComponentAngularPage } from './app.po';

describe('scheduler-component-angular App', () => {
  let page: SchedulerComponentAngularPage;

  beforeEach(() => {
    page = new SchedulerComponentAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
