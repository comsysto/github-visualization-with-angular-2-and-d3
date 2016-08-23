import { Component, Input } from '@angular/core';
import { GithubService } from '../../../services/github.service';
import { GithubNumberData } from '../../../models/GithubNumberData';
import { GithubRepository } from '../../../models/domain/GithubRepository';
import { OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { TilesService } from '../tiles.service';

@Component({
    moduleId: module.id,
    selector: 'cs-number-tile',
    templateUrl: 'number.tile.component.html',
    styleUrls: ['number.tile.component.css']
})
export class NumberTileComponent {
    @Input() data: GithubNumberData;

    constructor(private tilesService:TilesService) {
    }
}
