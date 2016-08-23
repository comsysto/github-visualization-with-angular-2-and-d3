export class GithubLanguage {
    language: string;
    lines_of_code: number;


    constructor(language: string, lines_of_code: number) {
        this.language = language;
        this.lines_of_code = lines_of_code;
    }
}
