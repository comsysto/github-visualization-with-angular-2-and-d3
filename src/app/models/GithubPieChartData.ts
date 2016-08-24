import { GithubPieChartType } from './GithubPieChartType';
import { GithubPieChartDataEntry } from './GithubPieChartDataEntry';

export class GithubPieChartData {
    title: string;
    type: GithubPieChartType;
    dataSet: GithubPieChartDataEntry[];

    constructor(title: string, type: GithubPieChartType, dataSet: GithubPieChartDataEntry[]) {
        this.title = title;
        this.type = type;
        this.dataSet = dataSet;
    }
}
