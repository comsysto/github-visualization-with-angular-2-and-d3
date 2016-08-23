import {Component, OnInit, AfterViewChecked} from '@angular/core';
import { TilesService } from '../tiles.service';
import * as d3 from 'd3';

@Component({
    moduleId: module.id,
    selector: 'cs-chart-tile',
    templateUrl: 'chart.tile.component.html'
})
export class ChartTileComponent extends AfterViewChecked {


    id: string;

    constructor(private tilesService:TilesService) {
        super();
        this.id = 'tile1';
    }

    ngAfterViewChecked():void {
        this.drawChart();
    }

    private drawChart():void {
        //Make an SVG Container
        var svgContainer = d3.select("#" + this.id).append("svg")
            .attr("width", 200)
            .attr("height", 200);

//Draw the Rectangle
        var rectangle = svgContainer.append("rect")
            .attr("x", 10)
            .attr("y", 10)
            .attr("width", 50)
            .attr("height", 100);
    }

}
