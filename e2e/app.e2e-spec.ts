import { GithubVisualizationWithAngular2AndD3Page } from './app.po';

describe('github-visualization-with-angular-2-and-d3 App', function() {
  let page: GithubVisualizationWithAngular2AndD3Page;

  beforeEach(() => {
    page = new GithubVisualizationWithAngular2AndD3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
