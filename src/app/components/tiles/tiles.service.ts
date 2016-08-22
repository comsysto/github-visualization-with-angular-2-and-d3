import { Injectable } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { DataService } from '../../services/data.service';
import { GithubRepo } from '../../models/GithubRepo';

@Injectable()
export class TilesService {
    constructor(private githubService: GithubService,
                private dataService: DataService) {

    }

    public getNewGithubRepository(repositoryName:string) {
        let observable = this.githubService.getRepo(repositoryName);

        observable.subscribe(r => this.dataService.setGithubRepo(r));
    }

    public getGithubRepository():GithubRepo {
        return this.dataService.getGithubRepo();
    }
}
