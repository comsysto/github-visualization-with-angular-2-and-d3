import { Component, AfterViewChecked, Input, HostBinding } from '@angular/core';
import { TilesService } from '../tiles.service';
import * as d3 from 'd3';
import { GithubBarChartData } from '../../../models/GithubBarChartData';
import { GithubBarChartDataEntry } from '../../../models/GithubBarChartDataEntry';

@Component({
    moduleId: module.id,
    selector: 'cs-bar-chart-tile',
    templateUrl: 'bar.chart.tile.component.html',
    styleUrls: ['bar.chart.tile.component.css']
})
export class BarChartTileComponent extends AfterViewChecked {
    @HostBinding('class.tile') tile = true;
    @Input() data: GithubBarChartData;
    id: string;

    constructor(private tilesService: TilesService) {
        super();
        this.id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
    }

    ngAfterViewChecked(): void {
        this.drawChart();
    }

    private drawChart(): void {
        d3.select("#" + this.id).html('');

        let dataSet: GithubBarChartDataEntry[] = this.data.dataSet;
        if (!dataSet) return;

        var w = 400;
        var h = 100;

        var maxAdditions = -1;
        dataSet.forEach((d) => { if (d.additions > maxAdditions) maxAdditions = d.additions });
        // note that deletions are negative values
        var maxDeletions = 1;
        dataSet.forEach((d) => { if (d.deletions < maxDeletions) maxDeletions = d.deletions });

        var scaleAdditions = d3.scale.linear()
        .domain([0, maxAdditions]).range([0, 100]);

        var scaleDeletions = d3.scale.linear()
        .domain([0, maxDeletions]).range([0, 100]); // maxDeletions is mapped tp 100

        // create the drawing area
        var svg = d3.select('#' + this.id)
        .append("svg")
        .attr("viewBox", '0 0 ' + w + ' ' + h)
        .attr("preserveAspectRatio", "none");

        var additionsGroup = svg.append("svg:g")
        .attr("fill", "#00ACC1");

        var deletionsGroup = svg.append("svg:g")
        .attr("fill", "#B71C1C");

        // draw the chart
        additionsGroup.selectAll("rect")
        .data(dataSet)
        .enter()
        .append("rect")
        .attr("x", function(d, i) {return i * (w / dataSet.length)})
        .attr("y", function(d) { return h/2 - scaleAdditions(d.additions) })
        .attr("width", w / dataSet.length)
        .attr("height", function(d) {return scaleAdditions(d.additions); });

        deletionsGroup.selectAll("rect")
        .data(dataSet)
        .enter()
        .append("rect")
        .attr("x", function(d, i) {return i * (w / dataSet.length)})
        .attr("y", function(d) { return h/2 })
        .attr("width", w / dataSet.length)
        .attr("height", function(d) {return scaleDeletions(d.deletions); });

    }
}