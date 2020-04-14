import { Component, OnInit } from '@angular/core';
import{ FilmsService} from '../services/films.service'
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})

export class FilmsComponent implements OnInit {

  movies:any[]

  filmsSubscription: Subscription;

  constructor( private filmsService: FilmsService ) { }

  ngOnInit(): void {

      this.filmsSubscription = this.filmsService.filmsSubject.subscribe(
        (movie: any[]) => {
          this.movies = movie;
        }
      );
      this.filmsService.fetch_movies_popular();
    }
  

  }

