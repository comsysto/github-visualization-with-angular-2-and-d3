import { GithubUser } from './GithubUser';

export class GithubRepository {
    owner:GithubUser;
    organization:GithubUser;
    id: number;
    name: string;
    full_name: string;
    description: string;
    html_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language:string;
    forks_count:number;
    open_issues:number;
    watchers:number;
    network_count:number;
    subscribers_count:number;
    forks_url:string;
    contributors_url:string;
    languages_url:string;
}
