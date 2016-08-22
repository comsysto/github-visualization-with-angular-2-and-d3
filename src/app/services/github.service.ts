import { Injectable } from '@angular/core';
import { GithubNumberType } from '../models/GithubNumberType';

@Injectable()
export class GithubService {
    public getNumber(type: GithubNumberType): number {
        switch (type) {
            case GithubNumberType.CONTRIBUTORS:
                return 1;
            case GithubNumberType.REPO_AGE:
                return 2;
            case GithubNumberType.TOTAL_COMMITS:
                return 3;
            default:
                return 666;
        }
    }
}
