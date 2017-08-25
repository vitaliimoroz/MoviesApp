import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppComponent } from './containers/app';
import { ComponentsModule } from './components/index.module';
import { CollectionPageComponent } from './containers/movies-collection-page';
import { NotFoundPageComponent } from './containers/not-found-page';
import { MovieService } from './services/movie.service';
import { MovieEffects } from './effects/movie.effects';

import { reducers } from './reducers/index';
import { routes } from './routes';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ComponentsModule,
    CommonModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot(routes, { useHash: false }),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([MovieEffects])
  ],
  declarations: [
    AppComponent,
    CollectionPageComponent,
    NotFoundPageComponent
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
