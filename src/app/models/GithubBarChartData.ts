import { GithubBarChartType } from './GithubBarChartType';
import { GithubBarChartDataEntry } from './GithubBarChartDataEntry';

export class GithubBarChartData {
    title: string;
    type: GithubBarChartType;
    dataSet: GithubBarChartDataEntry[];

    constructor(title: string, type: GithubBarChartType, dataSet: GithubBarChartDataEntry[]) {
        this.title = title;
        this.type = type;
        this.dataSet = dataSet;
    }
}
