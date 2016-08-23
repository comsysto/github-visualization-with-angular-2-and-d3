import { GithubRepository } from './GithubRepository';
import { GithubCodeFrequency } from './GithubCodeFrequency';

export class GithubData {
    repository: GithubRepository;
    forks_sorted_by_stargazers:GithubRepository[];
    code_frequency:GithubCodeFrequency;
}
