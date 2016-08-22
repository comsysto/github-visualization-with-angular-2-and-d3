import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { NumberTileComponent } from './components/tiles/numberTile/number.tile.component';
import { GithubService } from './services/github.service';
import { TilesComponent } from './components/tiles/tiles.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    TilesComponent,
    NumberTileComponent
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
