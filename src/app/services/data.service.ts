import { GithubRepository } from '../models/domain/GithubRepository';
import { GithubData } from '../models/domain/GithubData';
import * as moment from 'moment';
import { GithubCodeFrequency } from '../models/domain/GithubCodeFrequency';
import { GithubCodeFrequencyWeek } from '../models/domain/GithubCodeFrquencyWeek';

export class DataService {
    private githubData: GithubData;

    constructor() {
        this.resetGithubData();
    }

    public getGithubRepo(): GithubRepository {
        return this.githubData.repository;
    }

    public setGithubRepo(value: GithubRepository) {
        this.resetGithubData();
        this.githubData.repository = value;
    }

    public getGithubForks(): GithubRepository[] {
        return this.githubData.forks_sorted_by_stargazers;
    }

    public setGithubForks(value: GithubRepository[]) {
        this.githubData.forks_sorted_by_stargazers = value;
    }

    public getGithubCodeFrequency(): GithubCodeFrequency {
        return this.githubData.code_frequency;
    }

    public setGithubCodeFrequency(value: any[][]): void {
        value.forEach((week, idx) => {
            let weekDate = week[0],
                additions = week[1],
                deletions = week[2];

            this.githubData.code_frequency.weeks.push(
                new GithubCodeFrequencyWeek(
                    moment.unix(weekDate),
                    additions,
                    deletions
                )
            );
        });
    }

    private resetGithubData() {
        this.githubData = new GithubData();
        this.githubData.repository = new GithubRepository();
        this.githubData.forks_sorted_by_stargazers = [];
        this.githubData.code_frequency = new GithubCodeFrequency();
        this.githubData.code_frequency.weeks = [];
    }
}
