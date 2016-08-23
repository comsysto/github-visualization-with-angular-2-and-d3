import { Component, OnInit } from '@angular/core';
import { GithubNumberData } from '../../models/GithubTileData';
import { GithubNumberType } from '../../models/GithubNumberType';
import { GithubService } from '../../services/github.service';
import { DataService } from '../../services/data.service';
import { TilesService } from './tiles.service';
import { GithubRepository } from '../../models/domain/GithubRepository';
import { GithubCodeFrequencyWeek } from '../../models/domain/GithubCodeFrquencyWeek';

@Component({
    moduleId: module.id,
    selector: 'cs-tiles',
    providers: [TilesService],
    templateUrl: 'tiles.component.html'
})
export class TilesComponent {
    constructor(private tilesService:TilesService) {
    }

    onRepoNameChange(repoName:string) {
        console.log('onRepoNameChange', repoName);
        this.tilesService.getNewGithubRepository(repoName);
    }

    getGithubForks():GithubRepository[] {
        return this.tilesService.getGithubForks().slice(0,3);
    }

    public getGithubCodeFrequencyWeeks(): GithubCodeFrequencyWeek[] {
        return this.tilesService.getGithubCodeFrequencyWeeks();
    }

    getContributorsData(): GithubNumberData {
        return new GithubNumberData('Contributors', GithubNumberType.CONTRIBUTORS);
    }

    getTotalCommitsData(): GithubNumberData {
        return new GithubNumberData('Total Commits', GithubNumberType.TOTAL_COMMITS);
    }

    getRepoAgeData(): GithubNumberData {
        return new GithubNumberData('Repo Age', GithubNumberType.REPO_AGE);
    }
}
