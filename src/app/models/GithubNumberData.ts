import { GithubNumberType } from './GithubNumberType';

export class GithubNumberData {
    title: string;
    type: GithubNumberType;
    number: number;
    icon: string;

    constructor(title: string, type: GithubNumberType, number: number, icon:string) {
        this.title = title;
        this.type = type;
        this.number = number;
        this.icon = icon;
    }
}
