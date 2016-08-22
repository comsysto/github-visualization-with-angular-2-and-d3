import { GithubRepo } from '../models/GithubRepo';

export class DataService {
    private githubRepo: GithubRepo = new GithubRepo();

    public getGithubRepo(): GithubRepo {
        return this.githubRepo;
    }

    public setGithubRepo(value: GithubRepo) {
        this.githubRepo = value;
    }
}
