import { Component, OnInit, AfterViewChecked, Input } from '@angular/core';
import { TilesService } from '../tiles.service';
import * as d3 from 'd3';
import { GithubPieChartData } from '../../../models/GithubPieChartData';

@Component({
    moduleId: module.id,
    selector: 'cs-pie-chart-tile',
    templateUrl: 'pie.chart.tile.component.html',
    styleUrls: ['pie.chart.tile.component.css']
})
export class PieChartTileComponent extends AfterViewChecked {
    @Input() data:GithubPieChartData;
    id: string;

    constructor(private tilesService:TilesService) {
        super();
        this.id = 'DSGASDGSA';
    }

    ngAfterViewChecked():void {
        this.drawChart();
    }

    private drawChart():void {
        d3.select("#" + this.id).html('');

        let dataSet:any = this.data.dataSet;
        if (!dataSet) return;

        var w = 400;
        var h = 400;
        var r = h/2;
        var color = d3.scale.category20c();

        var vis = d3.select('#' + this.id).append("svg:svg").data([dataSet]).attr("width", w).attr("height", h).append("svg:g").attr("transform", "translate(" + r + "," + r + ")");
        var pie = d3.layout.pie().value(function(d:any){return d.count;});

// declare an arc generator function
        var arc = d3.svg.arc().outerRadius(r);

// select paths, use arc generator to draw
        var arcs = vis.selectAll("g.slice").data(pie).enter().append("svg:g").attr("class", "slice");
        arcs.append("svg:path")
            .attr("fill", function(d, i:any){
                return color(i);
            })
            .attr("d", function (d:any) {
                // log the result of the arc generator to show how cool it is :)
                console.log(arc(d));
                return arc(d);
            });

// add the text
        arcs.append("svg:text").attr("transform", function(d:any){
            d.innerRadius = 0;
            d.outerRadius = r;
            return "translate(" + arc.centroid(d) + ")";}).attr("text-anchor", "middle").text( function(d, i) {
            return dataSet[i].label;}
        );



//Draw the Rectangle
//         var rectangle = svgContainer.append("rect")
//             .attr("x", 10)
//             .attr("y", 10)
//             .attr("width", 50)
//             .attr("height", 100);
    }

}
