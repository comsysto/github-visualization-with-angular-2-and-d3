import { Component, Input, HostBinding } from '@angular/core';
import { GithubNumberData } from '../../../models/GithubNumberData';
import { TilesService } from '../tiles.service';

@Component({
    moduleId: module.id,
    selector: 'cs-number-tile',
    templateUrl: 'number.tile.component.html',
    styleUrls: ['number.tile.component.css']
})
export class NumberTileComponent {
    @HostBinding('class.tile') tile = true;
    @Input() data: GithubNumberData;

    constructor(private tilesService:TilesService) {
    }
}
