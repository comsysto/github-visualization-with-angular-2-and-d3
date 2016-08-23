import { GithubNumberType } from './GithubNumberType';

export class GithubNumberData {
    title: string;
    type: GithubNumberType;
    number: number;

    constructor(title: string, type: GithubNumberType, number: number) {
        this.title = title;
        this.type = type;
        this.number = number;
    }
}
