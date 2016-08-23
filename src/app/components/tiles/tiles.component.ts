import { Component, OnInit } from '@angular/core';
import { GithubNumberData } from '../../models/GithubTileData';
import { GithubNumberType } from '../../models/GithubNumberType';
import { GithubService } from '../../services/github.service';
import { DataService } from '../../services/data.service';
import { TilesService } from './tiles.service';
import { GithubRepository } from '../../models/domain/GithubRepository';
import { GithubCodeFrequencyWeek } from '../../models/domain/GithubCodeFrquencyWeek';
import { GithubUser } from '../../models/domain/GithubUser';
import { GithubLanguage } from '../../models/domain/GithubLanguage';

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

    public getGithubContributors(): GithubUser[] {
        return this.tilesService.getGithubContributors();
    }

    public getGithubLanguages(): GithubLanguage[] {
        return this.tilesService.getGithubLanguages();
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
