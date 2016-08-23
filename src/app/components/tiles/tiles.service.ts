import { Injectable } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { DataService } from '../../services/data.service';
import { GithubRepository } from '../../models/domain/GithubRepository';
import { GithubCodeFrequencyWeek } from '../../models/domain/GithubCodeFrquencyWeek';

@Injectable()
export class TilesService {
    repo: GithubRepository;
    isDevMode: boolean = true;
    githubRepoUrlBase: string = 'https://api.github.com/repos/';
    githubRepoUrlFull: string = '';

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
                this.updateForks(this.repo.forks_url);
                this.updateCodeFrequency();
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

    private updateForks(forksUrl: string) {
        let url = this.isDevMode ? 'app/mocks/forks.json' : forksUrl + '?sort=stargazers';

        this.githubService.getGithubData(url).subscribe(
            (r: GithubRepository[]) => {
                this.dataService.setGithubForks(r)
            }
        );
    }

    private updateCodeFrequency() {
        let url = this.isDevMode ? 'app/mocks/code_frequency.json' : this.githubRepoUrlFull + '/code_frequency';

        this.githubService.getGithubData(url).subscribe(
            (r: any[][]) => {
                this.dataService.setGithubCodeFrequency(r);
            }
        );
    }
}
