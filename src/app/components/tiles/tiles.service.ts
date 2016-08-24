import { Injectable } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { DataService } from '../../services/data.service';
import { GithubRepository } from '../../models/domain/GithubRepository';
import { GithubCodeFrequencyWeek } from '../../models/domain/GithubCodeFrequencyWeek';
import { GithubUser } from '../../models/domain/GithubUser';
import { GithubLanguage } from '../../models/domain/GithubLanguage';
import { GithubNumberData } from '../../models/GithubNumberData';
import { GithubNumberType } from '../../models/GithubNumberType';
import { GithubPieChartType } from '../../models/GithubPieChartType';
import { GithubPieChartData } from '../../models/GithubPieChartData';
import { GithubPieChartDataEntry } from '../../models/GithubPieChartDataEntry';
import { GithubBarChartType } from '../../models/GithubBarChartType';
import { GithubBarChartDataEntry } from '../../models/GithubBarChartDataEntry';
import { GithubBarChartData } from '../../models/GithubBarChartData';

@Injectable()
export class TilesService {
    constructor(private githubService: GithubService,
                private dataService: DataService) {
    }

    isDataPresent(): boolean {
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

    getNumberData(type: GithubNumberType): GithubNumberData {
        switch (type) {
            case GithubNumberType.WATCHERS:
                return new GithubNumberData('Watchers', type, this.dataService.getWatchersCount(), 'people');
            case GithubNumberType.STAR_GAZERS:
                return new GithubNumberData('Star Gazers', type, this.dataService.getStarGazersCount(), 'star');
            case GithubNumberType.FORKS:
                return new GithubNumberData('Forks', type, this.dataService.getForksCount(), 'share');
        }
    }

    getPieChartData(type: GithubPieChartType): GithubPieChartData {
        let dataSet: GithubPieChartDataEntry[] = [],
            title = '';

        switch (type) {
            case GithubPieChartType.LANGUAGES:
                let languages: GithubLanguage[] = this.dataService.getGithubLanguages();

                title = 'Languages used';

                languages.forEach((language: GithubLanguage) => {
                    dataSet.push(new GithubPieChartDataEntry(language.language, language.lines_of_code));
                });
        }

        dataSet.sort((data1: GithubPieChartDataEntry, data2: GithubPieChartDataEntry) => {
            return data2.count - data1.count;
        });

        let reducedDataSet = [],
            otherDataEntry = new GithubPieChartDataEntry('Other', 0);

        dataSet.forEach((dataEntry, idx) => {
            if (idx < 3) {
                reducedDataSet.push(dataEntry);
            }
            else {
                otherDataEntry.count += dataEntry.count;
            }
        });
        reducedDataSet.push(otherDataEntry);

        return new GithubPieChartData(title, type, reducedDataSet);
    }

    getBarChartData(type: GithubBarChartType): GithubBarChartData {
        let dataSet: GithubBarChartDataEntry[] = [],
            title: string = '';

        switch (type) {
            case GithubBarChartType.ADDITIONS:
                let codeFrequencyWeeks: GithubCodeFrequencyWeek[] = this.dataService.getGithubCodeFrequency().weeks;

                title = 'History of additions';

                codeFrequencyWeeks.forEach((week) => {
                    dataSet.push(new GithubBarChartDataEntry(week.weekDate.format("WW/gg"), week.additions));
                });
        }

        return new GithubBarChartData(title, type, dataSet);
    }

    getMostValuableContributors(): GithubUser[] {
        return this.dataService.getGithubContributors().slice(0, 3);
    }
}
