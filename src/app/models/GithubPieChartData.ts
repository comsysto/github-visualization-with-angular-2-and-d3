import { GithubPieChartType } from './GithubPieChartType';
import { GithubPieChartDataEntry } from './GithubPieChartDataSet';

export class GithubPieChartData {
    type: GithubPieChartType;
    dataSet: GithubPieChartDataEntry[];

    constructor(type: GithubPieChartType, dataSet: GithubPieChartDataEntry[]) {
        this.type = type;
        this.dataSet = dataSet;
    }
}
