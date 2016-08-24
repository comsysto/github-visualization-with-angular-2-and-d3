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

        var container = document.querySelector('#' + this.id);
        var w = container.clientWidth;
        var h = 400;
        var barPadding = 1;

        var maxAdditions = -1;
        dataSet.forEach((d) => {
            if (d.count > maxAdditions) maxAdditions = d.count
        });


        var scale = d3.scale.linear()
            .domain([0, maxAdditions])
            .range([0, 100]);

// create the drawing area
        var svg = d3.select("#" + this.id)
            .append("svg")
            .attr('viewBox', '0 0 ' + w + ' ' + h)
            .attr("width", '100%')
            .attr("height", '100%');

// draw the chart
        svg.selectAll("rect")
            .data(dataSet)
            .enter()
            .append("rect")
            .attr("x", function (d, i) {
                return i * (w / dataSet.length)
            })
            .attr("y", function (d) {
                return h / 2 - scale(d.count)
            })
            .attr("width", w / dataSet.length - barPadding)
            .attr("height", function (d) {
                return scale(d.count);
            })
            .attr("fill", "teal");
    }

}
