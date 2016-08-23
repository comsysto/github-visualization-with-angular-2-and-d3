import { Injectable } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { DataService } from '../../services/data.service';
import { GithubRepository } from '../../models/domain/GithubRepository';
import { GithubCodeFrequencyWeek } from '../../models/domain/GithubCodeFrquencyWeek';
import { GithubUser } from '../../models/domain/GithubUser';
import { GithubLanguage } from '../../models/domain/GithubLanguage';
import { GithubNumberData } from '../../models/GithubNumberData';
import { GithubNumberType } from '../../models/GithubNumberType';

@Injectable()
export class TilesService {
    constructor(private githubService: GithubService,
                private dataService: DataService) {
    }

    isDataPresent():boolean {
        return this.dataService.isDataPresent();
    }

    public getGithubRepository(): GithubRepository {
        return this.dataService.getGithubRepository();
    }

    public getGithubForks(): GithubRepository[] {
        return this.dataService.getGithubForks();
    }

    public getGithubCodeFrequencyWeeks(): GithubCodeFrequencyWeek[] {
        return this.dataService.getGithubCodeFrequency().weeks;
    }

    public getGithubContributors(): GithubUser[] {
        return this.dataService.getGithubContributors();
    }

    public getGithubLanguages(): GithubLanguage[] {
        return this.dataService.getGithubLanguages();
    }

    getNumberData(type:GithubNumberType): GithubNumberData {
        switch (type) {
            case GithubNumberType.WATCHERS:
                return new GithubNumberData('Watchers', type, this.dataService.getWatchersCount());
            case GithubNumberType.STAR_GAZERS:
                return new GithubNumberData('Star Gazers', type, this.dataService.getStarGazersCount());
            case GithubNumberType.FORKS:
                return new GithubNumberData('Forks', type, this.dataService.getForksCount());
        }
    }
}
