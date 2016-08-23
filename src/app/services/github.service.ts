import { Injectable } from '@angular/core';
import { GithubNumberType } from '../models/GithubNumberType';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class GithubService {
    constructor(private http: Http) {
    }

    public getGithubData(dataUrl:string) {
        return this.http.get(dataUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

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
