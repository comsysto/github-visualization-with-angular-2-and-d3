export class GithubBarChartDataEntry {
    label: string;
    additions: number;
    deletions: number;

    constructor(label: string, additions: number, deletions: number) {
        this.label = label;
        this.additions = additions;
        this.deletions = deletions;
    }
}
