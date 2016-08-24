import { Component, Input, HostBinding } from '@angular/core';
import { GithubNumberData } from '../../../models/GithubNumberData';
import { TilesService } from '../tiles.service';
import { GithubUser } from '../../../models/domain/GithubUser';

@Component({
    moduleId: module.id,
    selector: 'cs-most-valuable-contributors-tile',
    templateUrl: 'most.valuable.contributors.tile.component.html',
    styleUrls: ['most.valuable.contributors.tile.component.css']
})
export class MostValuableContributorsTileComponent {
    @HostBinding('class.tile') tile = true;
    @Input() data: GithubUser[];

    constructor(private tilesService:TilesService) {
    }
}
