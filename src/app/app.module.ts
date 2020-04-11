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
import { ErrorPageComponent } from './error-page/error-page.component';

import { FilmsService } from './services/films.service';

import {MaterialModule} from './material.module';

import { Routes, RouterModule} from "@angular/router";

const appRoutes : Routes = [
  { path:'films', component : FilmsComponent },
  { path:'people', component : PeopleComponent },
  { path:'planets', component : PlanetsComponent },
  { path:'', component : FilmsComponent },
  { path:'not-found', component : ErrorPageComponent },
  { path:'**', redirectTo : '/not-found' },
]

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
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    FilmsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
