import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './app/environment';
import * as d3 from 'd3';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
d3.select('body')
    .transition()
    .style("background-color", "#faebd7");


