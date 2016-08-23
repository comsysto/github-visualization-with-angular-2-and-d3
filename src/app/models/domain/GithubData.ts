import { GithubRepository } from './GithubRepository';
import { GithubCodeFrequency } from './GithubCodeFrequency';
import { GithubUser } from './GithubUser';
import { GithubLanguage } from './GithubLanguage';

export class GithubData {
    repository: GithubRepository;
    forks_sorted_by_stargazers: GithubRepository[];
    code_frequency: GithubCodeFrequency;
    contributors: GithubUser[];
    languages: GithubLanguage[];
}
