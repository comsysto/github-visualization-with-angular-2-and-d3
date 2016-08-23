import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { NumberTileComponent } from './components/tiles/numberTile/number.tile.component';
import { GithubService } from './services/github.service';
import { TilesComponent } from './components/tiles/tiles.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { DataService } from './services/data.service';
import {ChartTileComponent} from "./components/tiles/chartTile/chart.tile.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule
    ],
    declarations: [
        AppComponent,
        TilesComponent,
        NumberTileComponent,
        ChartTileComponent
    ],
    providers: [
        GithubService,
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
