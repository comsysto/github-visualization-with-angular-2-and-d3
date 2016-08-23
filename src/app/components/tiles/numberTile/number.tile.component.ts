import { Component, Input } from '@angular/core';
import { GithubService } from '../../../services/github.service';
import { GithubNumberData } from '../../../models/GithubTileData';
import { GithubRepository } from '../../../models/domain/GithubRepository';
import { OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { TilesService } from '../tiles.service';

@Component({
    moduleId: module.id,
    selector: 'cs-number-tile',
    templateUrl: 'number.tile.component.html'
})
export class NumberTileComponent {
    @Input() data: GithubNumberData;
    number: number;
    repo: GithubRepository = new GithubRepository();

    constructor(private tilesService:TilesService) {
        this.number = 0;
    }

    getNumber(): number {
        return 1;
    }

    getRepo():GithubRepository {
        return this.tilesService.getGithubRepository();
    }
}
