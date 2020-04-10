import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { PlanetsComponent } from './planets/planets.component';
import { FilmsComponent } from './films/films.component';
import { PeopleComponent } from './people/people.component';
import { StarshipsComponent } from './starships/starships.component';
import { SpeciesComponent } from './species/species.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {MaterialModule} from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    VehiculesComponent,
    PlanetsComponent,
    FilmsComponent,
    PeopleComponent,
    StarshipsComponent,
    SpeciesComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
