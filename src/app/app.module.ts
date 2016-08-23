import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { NumberTileComponent } from './components/tiles/numberTile/number.tile.component';
import { GithubService } from './services/github.service';
import { TilesComponent } from './components/tiles/tiles.component';
import { HttpModule } from '@angular/http';
import { DataService } from './services/data.service';
import { PieChartTileComponent } from './components/tiles/pieChartTile/pie.chart.tile.component';
import { RepositoryComponent } from './components/repository/repository.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        RepositoryComponent,
        TilesComponent,
        NumberTileComponent,
        PieChartTileComponent
    ],
    providers: [
        GithubService,
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
