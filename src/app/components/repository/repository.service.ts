import { Injectable } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { DataService } from '../../services/data.service';
import { GithubRepository } from '../../models/domain/GithubRepository';
import { GithubUser } from '../../models/domain/GithubUser';

@Injectable()
export class RepositoryService {
    repository: GithubRepository;
    isDevMode: boolean = true;
    githubRepoUrlBase: string = 'https://api.github.com/repos/';
    githubRepoUrlFull: string;

    constructor(private githubService: GithubService,
                private dataService: DataService) {
        if (this.isDevMode) {
            this.getNewGithubRepository('');
        }
    }

    isDataPresent():boolean {
        return this.dataService.isDataPresent();
    }

    public getNewGithubRepository(repositoryName: string) {
        this.githubRepoUrlFull = this.githubRepoUrlBase + repositoryName;
        let url = this.isDevMode ? 'app/mocks/repo.json' : this.githubRepoUrlFull;

        this.githubService.getGithubData(url).subscribe(
            (r: GithubRepository) => {
                this.repository = r;
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
        return this.dataService.getGithubRepository();
    }

    private updateForks() {
        let url = this.isDevMode ? 'app/mocks/forks.json' : this.repository.forks_url + '?sort=stargazers';

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
                console.log('code frequency url', url);
                console.log('code frequency url repo', this.repository);
                console.log('code frequency url response', r);
                this.dataService.setGithubCodeFrequency(r);
            }
        );
    }

    private updateContributors() {
        let url = this.isDevMode ? 'app/mocks/contributors.json' : this.repository.contributors_url;

        this.githubService.getGithubData(url).subscribe(
            (r: GithubUser[]) => {
                this.dataService.setGithubContributors(r);
            }
        );
    }

    private updateLanguages() {
        let url = this.isDevMode ? 'app/mocks/languages.json' : this.repository.languages_url;

        this.githubService.getGithubData(url).subscribe(
            (r: Object) => {
                this.dataService.setGithubLanguages(r);
            }
        );
    }
}
