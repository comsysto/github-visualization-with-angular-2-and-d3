import moment = require('moment');
import Moment = moment.Moment;

export class GithubCodeFrequencyWeek {
    weekDate: Moment;
    additions: number;
    deletions: number;

    constructor(weekDate: moment.Moment, additions: number, deletions: number) {
        this.weekDate = weekDate;
        this.additions = additions;
        this.deletions = deletions;
    }
}
