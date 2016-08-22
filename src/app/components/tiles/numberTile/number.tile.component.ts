import { Component, Input } from '@angular/core';
import { GithubService } from '../../../services/github.service';
import { GithubNumberData } from '../../../models/GithubTileData';

@Component({
  moduleId: module.id,
  selector: 'cs-number-tile',
  templateUrl: 'number.tile.component.html'
})
export class NumberTileComponent {
  @Input() data: GithubNumberData;
  number: number;

  constructor(private githubService: GithubService) {
    this.number = 0;
  }

  getNumber():number {
    return this.githubService.getNumber(this.data.type);
  }
}
