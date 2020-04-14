
import { Subject } from 'rxjs';
import { MdcOverline } from '@angular-mdc/web';

import { Injectable } from '@angular/core';
/* import { HttpClient } from '@angular/common/http'; */

@Injectable()

export class FilmsService {

    private movie:any[]

    filmsSubject = new Subject<any[]>();

   /*  constructor(private httpClient: HttpClient) { } */

    fetch_movies_popular(){

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=da1bce919075394c3d45dccb32acf33e&language=fr&page=1')
        .then(response => {
            return response.json()
        }) .then(json => {
            this.movie = json.results
            console.log(this.movie)
            this.emitFilmsSubject();
        })
    }

    
    emitFilmsSubject() {
        this.filmsSubject.next(this.movie.slice());
    }

}
