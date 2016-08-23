import { Injectable } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { DataService } from '../../services/data.service';
import { GithubRepository } from '../../models/domain/GithubRepository';
import { GithubCodeFrequencyWeek } from '../../models/domain/GithubCodeFrquencyWeek';
import { GithubUser } from '../../models/domain/GithubUser';
import { GithubLanguage } from '../../models/domain/GithubLanguage';

@Injectable()
export class TilesService {
    repo: GithubRepository;
    isDevMode: boolean = true;
    githubRepoUrlBase: string = 'https://api.github.com/repos/';
    githubRepoUrlFull: string;

    constructor(private githubService: GithubService,
                private dataService: DataService) {
        if (this.isDevMode) {
            this.getNewGithubRepository('');
        }
    }

    public getNewGithubRepository(repositoryName: string) {
        this.githubRepoUrlFull = this.githubRepoUrlBase + repositoryName;
        let url = this.isDevMode ? 'app/mocks/repo.json' : this.githubRepoUrlFull;

        this.githubService.getGithubData(url).subscribe(
            (r: GithubRepository) => {
                this.repo = r;
                this.dataService.setGithubRepo(r)
            },
            () => {
            },
            () => {
                this.updateForks();
                this.updateCodeFrequency();
                this.updateContributors();
                this.updateLanguages();
            }
        );
    }

    public getGithubRepository(): GithubRepository {
        return this.dataService.getGithubRepo();
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

    private updateForks() {
        let url = this.isDevMode ? 'app/mocks/forks.json' : this.repo.forks_url + '?sort=stargazers';

        this.githubService.getGithubData(url).subscribe(
            (r: GithubRepository[]) => {
                this.dataService.setGithubForks(r)
            }
        );
    }

    private updateCodeFrequency() {
        let url = this.isDevMode ? 'app/mocks/code_frequency.json' : this.githubRepoUrlFull + '/stats/code_frequency';

        this.githubService.getGithubData(url).subscribe(
            (r: any[][]) => {
                this.dataService.setGithubCodeFrequency(r);
            }
        );
    }

    private updateContributors() {
        let url = this.isDevMode ? 'app/mocks/contributors.json' : this.repo.contributors_url;

        this.githubService.getGithubData(url).subscribe(
            (r: GithubUser[]) => {
                this.dataService.setGithubContributors(r);
            }
        );
    }

    private updateLanguages() {
        let url = this.isDevMode ? 'app/mocks/languages.json' : this.repo.languages_url;

        this.githubService.getGithubData(url).subscribe(
            (r: Object) => {
                this.dataService.setGithubLanguages(r);
            }
        );
    }
}
