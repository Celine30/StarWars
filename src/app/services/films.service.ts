
import { Subject } from 'rxjs';

export class FilmsService{

    filmSubject = new Subject<any[]>();

    private films = ["film1","film2","film3"];

    movie =this.fetch_movies_popular()

    fetch_movies_popular(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=da1bce919075394c3d45dccb32acf33e&language=fr&page=1')
        .then(response => {
            return response.json()
        })
        .then(json => {
            this.attitrer(json.results[0].title)  
        })
    }

    emitPostSubject (){
        this.filmSubject.next(this.films.slice());
    
    }

    attitrer(r){
        console.log(r)
    }

}

console.log('coucou')