import { GithubNumberType } from './GithubNumberType';

export class GithubNumberData {
  title: string;
  type: GithubNumberType;

  constructor(title: string, type: GithubNumberType) {
    this.title = title;
    this.type = type;
  }
}
