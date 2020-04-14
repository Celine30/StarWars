import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from "@angular/router";
/* import { HttpClientModule } from '@angular/common/http'; */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MovieComponent } from './movie/movie.component';

import { FilmsService } from './services/films.service';

import {MaterialModule} from './material.module';


const appRoutes : Routes = [
  { path:'films', component : FilmsComponent },
  { path:'', component : FilmsComponent },
  { path:'not-found', component : ErrorPageComponent },
  { path:'**', redirectTo : '/not-found' },
]

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    HomeComponent,
    HeaderComponent,
    ErrorPageComponent,
    MovieComponent
  ],
  imports: [
 /*    HttpClientModule, */
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    FilmsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
