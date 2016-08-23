import { Component } from '@angular/core';
import { GithubRepository } from '../../models/domain/GithubRepository';
import { RepositoryService } from './repository.service';

@Component({
    moduleId: module.id,
    selector: 'cs-repository',
    providers: [RepositoryService],
    templateUrl: 'repository.component.html',
    styleUrls: ['repository.component.css']
})
export class RepositoryComponent {
    constructor(private repositoryService: RepositoryService) {
    }

    isDataPresent():boolean {
        return this.repositoryService.isDataPresent();
    }

    onRepoNameChange(repoName: string) {
        this.repositoryService.getNewGithubRepository(repoName);
    }

    getGithubRepository(): GithubRepository {
        return this.repositoryService.getGithubRepository();
    }

    getIconUrl(): string {
        if (this.getGithubRepository().owner) {
            return this.getGithubRepository().owner.avatar_url;
        }

        return '';
    }

    getName(): string {
        return this.getGithubRepository().name;
    }

    getDescription(): string {
        return this.getGithubRepository().description;
    }

    getLanguage(): string {
        return this.getGithubRepository().language;
    }
}
