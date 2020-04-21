
import { Subject } from 'rxjs';
import { MdcOverline } from '@angular-mdc/web';
import { OneMovie} from '../onemovie'

import { Injectable, ɵConsole } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable()

export class FilmsService {

    private DataMovies = []

    private movies = []

    private count = 0

    private id_popular = []

    filmsSubject = new Subject<any[]>();

    fetch_movies_popular(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=da1bce919075394c3d45dccb32acf33e&language=fr&page=1')
        .then(response => {
            return response.json()
        }) .then(json => {
            this.search_Movies(this.check_id(json.results))
        })
    }

    check_id(datas:any){
        for (const data of datas) {
            this.id_popular.push(data.id)   
            }
        return this.id_popular
    }

    search_Movies(idMovies:any){
        for (const idMovie of idMovies) {
            fetch('https://api.themoviedb.org/3/movie/'+ idMovie +'?api_key=da1bce919075394c3d45dccb32acf33e&language=FR')
            .then(response => {
                return response.json()
            })
            .then(json => {
                this.add(json)
            })
        }
    }

    add(details:any){
        let picture
        if(details.backdrop_path == null){
            picture = 'nopicture'
        }else{
            picture = details.backdrop_path
        }
        
        this.movies.push(
            new OneMovie(
                details.id,
                picture,
                details.title,
                details.tagline,
                details.release_date,
                details.original_language,
                null,
                details.runtime,
                null,
            )
        )
        if(this.movies.length == this.id_popular.length){
            this.addBis(this.movies)
        }
    }

    addBis(details:any){
        for (const detail of details) {
            fetch('https://api.themoviedb.org/3/movie/'+ detail.id +'/credits?api_key=da1bce919075394c3d45dccb32acf33e')
                    .then(response => {
                        return response.json()
                    })
                    .then(json => {
                        this.tomovie(detail.id , json)
                    })
        }
    }

    tomovie(detail ,json){ 
        this.count+=1
        for (const movie of this.movies) {
            if( movie.id == detail){
                movie.credit = json
                let productor =""
                for (const produc of json.crew){
                    if ((produc.department == "Directing" ) && ( produc.job == "Director" ) ){
                        productor =   produc.name +", "+ productor
                    }
                    movie.director = productor
                }
            }            
        }
        this.toTransfert(this.movies)
    }

    toTransfert(movies){
        if (this.count == 20){
            this.DataMovies = this.movies
            this.emitFilmsSubject()
        }
    }

    emitFilmsSubject() {
        this.filmsSubject.next(this.DataMovies.slice());
    }

}

/* trouver les credits */
/* https://api.themoviedb.org/3/movie/419704/credits?api_key=da1bce919075394c3d45dccb32acf33e */


/* DETAILS FILMS */
/* https://api.themoviedb.org/3/movie/419704?api_key=da1bce919075394c3d45dccb32acf33e&language=FR */