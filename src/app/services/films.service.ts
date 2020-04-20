
import { Subject } from 'rxjs';
import { MdcOverline } from '@angular-mdc/web';
import { OneMovie} from '../onemovie'

import { Injectable } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable()

export class FilmsService {

    private DataMovies = []

    private movies=[]

    private id_popular=[]

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
        if(details.backdrop_path == null){
            details.backdrop_path= "nopicture"
        }
        this.movies.push(details)
        if(this.movies.length == this.id_popular.length){
            console.log('il y sont tous')
            for (let i=0 ; i<20 ; i++){
                    fetch('https://api.themoviedb.org/3/movie/'+ this.id_popular[i] +'/credits?api_key=da1bce919075394c3d45dccb32acf33e')
                    .then(response => {
                        return response.json()
                    })
                    .then(json => {
                        this.addB(i ,json)
                    })
                }
            }
        }

    addB(id: number,details: any){
        Object.defineProperty(this.movies[id], 'credits', {
            value: details
        });
        if(id==this.movies.length-1){
            this.tomovie(this.movies)
            this.emitFilmsSubject();
        }
    }

    tomovie(datas){
    
        for (const data of datas) {
            let productor =""
            for( const produc of data.credits.crew){
                if ((produc.department == "Directing")&&(produc.job == "Director")){
                    productor = produc.name +", "+ productor
                }
            }
            this.DataMovies.push(
                new OneMovie(
                    data.id,
                    data.backdrop_path,
                    data.title,
                    data.tagline,
                    data.release_date,
                    data.original_language,
                    productor,
                    data.runtime,
                    data.credits.cast,
                    data.credits.crew
                )
            )
        }
        console.log(this.DataMovies)
    }

    emitFilmsSubject() {
        console.log(this.movies)
        this.filmsSubject.next(this.DataMovies.slice());
    }

}

/* trouver les credits */
/* https://api.themoviedb.org/3/movie/419704/credits?api_key=da1bce919075394c3d45dccb32acf33e */

/* LISTE DES GENRS */
/* https://api.themoviedb.org/3/genre/movie/list?api_key=da1bce919075394c3d45dccb32acf33e&language=FR */

/* DETAILS FILMS */
/* https://api.themoviedb.org/3/movie/419704?api_key=da1bce919075394c3d45dccb32acf33e&language=FR */