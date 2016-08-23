import { GithubRepository } from '../models/domain/GithubRepository';
import { GithubData } from '../models/domain/GithubData';
import * as moment from 'moment';
import { GithubCodeFrequency } from '../models/domain/GithubCodeFrequency';
import { GithubCodeFrequencyWeek } from '../models/domain/GithubCodeFrquencyWeek';
import { GithubUser } from '../models/domain/GithubUser';
import { GithubLanguage } from '../models/domain/GithubLanguage';

export class DataService {
    private githubData: GithubData;
    private dataPresent: boolean;

    constructor() {
        this.resetGithubData();
    }

    public isDataPresent(): boolean {
        return this.dataPresent;
    }

    public getGithubRepository(): GithubRepository {
        return this.githubData.repository;
    }

    public setGithubRepo(value: GithubRepository) {
        this.resetGithubData();
        this.githubData.repository = value;
        this.dataPresent = true;
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
        value.forEach((week) => {
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

    public getGithubContributors(): GithubUser[] {
        return this.githubData.contributors;
    }

    public setGithubContributors(value: GithubUser[]): void {
        this.githubData.contributors = value;
    }

    public getGithubLanguages(): GithubLanguage[] {
        return this.githubData.languages;
    }

    public setGithubLanguages(value: Object): void {
        for (var language in value) {
            this.githubData.languages.push(
                new GithubLanguage(language, value[language])
            );
        }
    }

    public getWatchersCount():number {
        return this.getGithubRepository().subscribers_count;
    }

    public getStarGazersCount():number {
        return this.getGithubRepository().stargazers_count;
    }

    public getForksCount():number {
        return this.getGithubRepository().forks_count;
    }

    private resetGithubData() {
        this.dataPresent = false;
        this.githubData = new GithubData();
        this.githubData.repository = new GithubRepository();
        this.githubData.forks_sorted_by_stargazers = [];
        this.githubData.code_frequency = new GithubCodeFrequency();
        this.githubData.code_frequency.weeks = [];
        this.githubData.contributors = [];
        this.githubData.languages = [];
    }
}
