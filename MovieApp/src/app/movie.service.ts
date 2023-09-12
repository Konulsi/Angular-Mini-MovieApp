import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';
import { Movie } from './movie';
import {Movies} from './movie.datasource';
import { Observable, of } from 'rxjs'; // asinxron methodlar yaza bilmek uchun observable , of import edilmelidir
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiMoviesUrl = 'api/movies'

  constructor(
    private loggingService: LoggingService,
    private http: HttpClient
    ) { }  // movie listesini istenilen zaman loglama mesaagelerini chixartmaq uchun bunu edirik.yeni constructorda inject edib metodun ichinde loggingservicedeki add methoduna chatiriq.

  getMovies(): Observable<Movie[]> {  //methodun asinxron ishlemesi uchun bele yazilir.
    this.loggingService.add('MovieService: listing movies');
    return this.http.get<Movie[]>(this.apiMoviesUrl);
  }

  getMovie(id): Observable<Movie>{
    this.loggingService.add('MovieService: get detail by id=' + id);
        return this.http.get<Movie>(this.apiMoviesUrl+'/'+id);
  }

  update(movie: Movie): Observable<any>{
    const httpOptions={ //gondereceyimiz melumatin tipini servere bildirmek uchun meselen json tipinde melumat gelecek.
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.put(this.apiMoviesUrl, movie, httpOptions);
  }

  add(movie: Movie):Observable<Movie>{

    return this.http.post<Movie>(this.apiMoviesUrl, movie)

  }

  delete(movie: Movie): Observable<Movie>{
    return this.http.delete<Movie>(this.apiMoviesUrl+'/'+movie.id);
  }
}
