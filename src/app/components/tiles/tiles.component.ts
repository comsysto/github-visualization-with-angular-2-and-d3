import { Component } from '@angular/core';
import { GithubNumberData } from '../../models/GithubTileData';
import { GithubNumberType } from '../../models/GithubNumberType';

@Component({
  moduleId: module.id,
  selector: 'cs-tiles',
  templateUrl: 'tiles.component.html'
})
export class TilesComponent {
  getContributorsData():GithubNumberData {
    return new GithubNumberData('Contributors', GithubNumberType.CONTRIBUTORS);
  }

  getTotalCommitsData():GithubNumberData {
    return new GithubNumberData('Total Commits', GithubNumberType.TOTAL_COMMITS);
  }

  getRepoAgeData():GithubNumberData {
    return new GithubNumberData('Repo Age', GithubNumberType.REPO_AGE);
  }
}
