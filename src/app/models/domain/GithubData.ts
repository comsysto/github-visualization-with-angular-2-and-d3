import { GithubRepository } from './GithubRepository';
import { GithubCodeFrequency } from './GithubCodeFrequency';
import { GithubUser } from './GithubUser';
import { GithubLanguage } from './GithubLanguage';
import { GithubParticipations } from './GithubParticipations';

export class GithubData {
    repository: GithubRepository;
    forks_sorted_by_stargazers:GithubRepository[];
    code_frequency:GithubCodeFrequency;
    contributors:GithubUser[];
    languages:GithubLanguage[];
    participations:GithubParticipations;
}
