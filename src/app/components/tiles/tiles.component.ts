import { Component, OnInit } from '@angular/core';
import { GithubNumberData } from '../../models/GithubNumberData';
import { GithubNumberType } from '../../models/GithubNumberType';
import { GithubService } from '../../services/github.service';
import { DataService } from '../../services/data.service';
import { TilesService } from './tiles.service';
import { GithubRepository } from '../../models/domain/GithubRepository';
import { GithubCodeFrequencyWeek } from '../../models/domain/GithubCodeFrequencyWeek';
import { GithubUser } from '../../models/domain/GithubUser';
import { GithubLanguage } from '../../models/domain/GithubLanguage';
import { GithubPieChartData } from '../../models/GithubPieChartData';
import { GithubPieChartType } from '../../models/GithubPieChartType';

@Component({
    moduleId: module.id,
    selector: 'cs-tiles',
    providers: [TilesService],
    templateUrl: 'tiles.component.html',
    styleUrls: ['tiles.component.css']
})
export class TilesComponent {
    constructor(private tilesService:TilesService) {
    }

    isDataPresent():boolean {
        return this.tilesService.isDataPresent();
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

    getWatchersData(): GithubNumberData {
        return this.tilesService.getNumberData(GithubNumberType.WATCHERS);
    }

    getStarGazersData(): GithubNumberData {
        return this.tilesService.getNumberData(GithubNumberType.STAR_GAZERS);
    }

    getForksData(): GithubNumberData {
        return this.tilesService.getNumberData(GithubNumberType.FORKS);
    }

    getLanguagesData(): GithubPieChartData {
        return this.tilesService.getPieChartData(GithubPieChartType.LANGUAGES);
    }

    getMostValuableContributors(): GithubUser[] {
        return this.tilesService.getMostValuableContributors();
    }
}
