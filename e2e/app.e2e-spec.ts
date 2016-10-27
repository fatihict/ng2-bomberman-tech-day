import { Ng2BombermanTechDayPage } from './app.po';

describe('ng2-bomberman-tech-day App', function() {
  let page: Ng2BombermanTechDayPage;

  beforeEach(() => {
    page = new Ng2BombermanTechDayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
